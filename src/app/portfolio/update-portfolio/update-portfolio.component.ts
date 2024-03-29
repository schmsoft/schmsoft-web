import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  CreateLoanPortfolioGQL,
  EditLoanPortfolioGQL,
  LoanPortfolioType,
} from '@graphql/generated/models';
import { take, tap } from 'rxjs/operators';

@Component({
  selector: 'ssw-update-portfolio',
  templateUrl: './update-portfolio.component.html',
  styleUrls: ['./update-portfolio.component.scss'],
})
export class UpdatePortfolioComponent implements OnInit, OnChanges {
  @Input()
  openModal = false;

  @Output()
  openModalChanged = new EventEmitter<boolean>();

  @Output()
  portfolioCreated = new EventEmitter<LoanPortfolioType>();

  @Output()
  portfolioUpdated = new EventEmitter<LoanPortfolioType>();

  @Input()
  portfolio: LoanPortfolioType = null as any;

  formGroup!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private createLoanPortfolioGQL: CreateLoanPortfolioGQL,
    private editLoanPortfolioGQL: EditLoanPortfolioGQL
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.portfolio?.currentValue) {
      this.initForm();
    }
  }

  private initForm() {
    this.formGroup = this.fb.group({
      name: [
        (this.portfolio && this.portfolio.name) || '',
        Validators.required,
      ],
      description: [
        (this.portfolio && this.portfolio.description) || '',
        Validators.required,
      ],
    });
  }

  close() {
    this.openModalChanged.emit(false);
  }

  save() {
    if (this.formGroup.invalid) return;
    if (this.portfolio) {
      this.editLoanPortfolioGQL
        .mutate({
          portfolio: this.formGroup.value,
          portfolioId: this.portfolio.id,
        })
        .pipe(
          take(1),
          tap((resp) => {
            const updatedPortfolio = {
              ...this.portfolio,
              ...this.formGroup.value,
            };
            this.portfolioUpdated.emit(updatedPortfolio);
            this.openModalChanged.emit(false);
          })
        )
        .subscribe();
    } else {
      this.createLoanPortfolioGQL
        .mutate({ portfolio: this.formGroup.value })
        .pipe(
          take(1),
          tap(({ data }) => {
            this.openModalChanged.emit(false);
            const portfolio = {
              ...this.formGroup.value,
              id: data?.addLoanPortfolio?.portfolio?.id,
            };
            this.portfolioCreated.emit(portfolio);
          })
        )
        .subscribe();
    }
  }
}
