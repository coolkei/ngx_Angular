import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, Validators } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';
import { Account, Gender } from './account.model';
import { states } from './states';
import { Observable } from 'rxjs/Observable';
import { EntityFormComponent } from '@nx-starter-kit/shared';
import * as moment from 'moment';

@Component({
  selector: 'nxtk-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.scss']
})
export class AccountFormComponent extends EntityFormComponent<Account> {
  readonly genderOptions = Object.keys(Gender);
  readonly states: string[] = states;
  filteredStates: Observable<string[]>;

  readonly maxDate = moment();
  readonly minDate = moment().subtract(100, 'years');

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { title: string; payload: Account },
    public dialogRef: MatDialogRef<AccountFormComponent>,
    private fb: FormBuilder
  ) {
    super(data, dialogRef);
  }

  /* Optional */
  // tslint:disable-next-line
  ngOnInit() {
    super.ngOnInit();
    this.filteredStates = this.entityForm
      .get('address.state')
      .valueChanges.pipe(startWith(''), map(state => (state ? this.filterStates(state) : this.states.slice())));
  }

  private filterStates(name: string) {
    return this.states.filter(state => state.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }

  buildForm(item: Account) {
    this.entityForm = this.fb.group(
      {
        first_name: [item.first_name || '', Validators.required],
        last_name: [item.last_name || '', Validators.required],
        gender: [item.gender || '', Validators.required],
        dob: [item.dob, Validators.required],
        email: [item.email || '', [Validators.required, Validators.email]],
        phone: [item.phone || '', [Validators.required, Validators.minLength(11)]],
        company: [item.company || '', Validators.required],
        address: this.fb.group({
          street: [item.address.street || '', Validators.required],
          city: [item.address.city || '', Validators.required],
          state: [item.address.state || '', Validators.required],
          zip: [item.address.zip || '', Validators.required]
        })
      },
      { updateOn: 'blur' }
    );
  }
}
