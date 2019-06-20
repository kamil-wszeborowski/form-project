import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Form-Project';

  public userData = this.fb.group({
    name: ['',Validators.required],
    surname: ['',[Validators.required]],
    email: ['',[Validators.required,Validators.email]],
    //phone: ['',[Validators.pattern('[0-9 ()+-]*$')]],
    phone: ['',[Validators.pattern('^[0-9 ()+-]{9,16}$')]],
    password: ['',[Validators.required, Validators.pattern('((?=.*[@#\\$%\\^&])(?=.*[A-Z]).{8,30})')]],
    confirmPassword: ['',Validators.required],
    pet: ['',Validators.required],
    address: this.fb.group({
      city: ['',Validators.required],
      street: ['',Validators.required],
      building: ['',Validators.required],
      flatNo: [''] 
    }),
    consents: this.fb.group({
      newsletter: ['',Validators.required],
      sms: [false]
    })
  }); 

  constructor(private fb:FormBuilder){
    this.userData.valueChanges.subscribe(val => {
   })

  }

  onSubmit(){
    
  let v_name = this.userData.get('name').value.replace(/^\s+|\s+$/gm, '');
  let v_surname = this.userData.get('surname').value.replace(/^\s+|\s+$/gm, '');
  let v_email = this.userData.get('email').value.replace(/^\s+|\s+$/gm, '');
  let v_phone = this.userData.get('phone').value.replace(/^\s+|\s+$/gm, '');
  let v_password = this.userData.get('password').value.replace(/^\s+|\s+$/gm, '');
  let v_confirmPassword = this.userData.get('confirmPassword').value.replace(/^\s+|\s+$/gm, '');
  let v_city = this.userData.get(['address','city']).value.replace(/^\s+|\s+$/gm, '');
  let v_street = this.userData.get(['address','street']).value.replace(/^\s+|\s+$/gm, '');
  let v_building = this.userData.get(['address','building']).value.replace(/^\s+|\s+$/gm, '');
  let v_flatNo = this.userData.get(['address','flatNo']).value.replace(/^\s+|\s+$/gm, '');
  let v_newsletter = this.userData.get(['consents','newsletter']).value;
  let v_sms = this.userData.get(['consents','sms']).value;
  
   // let v_name = this.userData.get('name').value;
   // v_name = v_name.replace(/^\s+|\s+$/gm, '');
    
    this.userData.patchValue({
      name: v_name,
      surname: v_surname,
      email: v_email,
      phone: v_phone,
      password: v_password,
      confirmPassword: v_confirmPassword,
      city: v_city,
      street: v_street,
      building: v_building,
      flatNo: v_flatNo,
      newsletter: v_newsletter,
      sms: v_sms
    })

    console.table(this.userData.value);
    //console.log(name);
  }

}


interface RegisteredUser {
  name: string; // Imię
  surname: string; // Nazwisko
  email: string; // E-mail
  phone: string | null; // Numer telefonu
  password: string; // Hasło
  pet: 'dog' | 'cat' | 'other'; // Zwierzę
    address: {
        city: string; // Miasto
        street: string; // Ulica
        building: string; // Numer domu
        flatNo: string | null; // Numer mieszkania
    };
    consents: {
      newsletter: boolean; // Zgoda na otrzymywanie wiadomości e-mail.
      sms: boolean; // Zgoda na otrzymywanie wiadomości SMS.
    }
  }
  