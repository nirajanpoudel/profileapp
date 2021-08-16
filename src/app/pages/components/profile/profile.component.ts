import { Component, OnInit } from '@angular/core';
import {  FormBuilder, Validators,FormGroup } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from 'src/app/services/profile.service';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public profileForm: FormGroup;
  public model: NgbDateStruct;
  public educationBackgroundList: FormArray;
  public errorMsg: string = '';
  public defaultProfile:any = '/assets/images/default.jpg';
  public contactModes: any = ['email', 'phone', 'none']
  get educationBackgroundFormGroup() {
    return this.profileForm.get('educationBackgrounds') as FormArray;
  }

  constructor(private fb: FormBuilder,
    private router:Router,
    private profileService: ProfileService
    ) {
    this.profileForm = this.fb.group({
      name: ['', Validators.compose([Validators.required])],
      email: ['',Validators.compose([Validators.required])],
      phone: ['',Validators.compose([Validators.required])],
      gender:['',Validators.compose([Validators.required])],
      nationality:['',Validators.compose([Validators.required])],
      dob:['',Validators.compose([Validators.required])],
      avatar:['',Validators.compose([Validators.required])],
      contactMode:[''],
      educationBackgrounds: this.fb.array([this.createEducationBackground()])
    });

   
    this.educationBackgroundList = this.profileForm.get('educationBackgrounds') as FormArray;
  }

  ngOnInit() {
    
  }

  createEducationBackground(): FormGroup {
    return this.fb.group({
      name: [null, Validators.compose([Validators.required])], // i.e. Home, Office
      label: [null, Validators.compose([Validators.required])]
    });
  }

  // add a EducationBackground form group
  addEducationBackground() {
    this.educationBackgroundList.push(this.createEducationBackground());
  }

  // remove EducationBackground from group
  removeEducationBackground(index:any) {
    this.educationBackgroundList.removeAt(index);
  }

  

  // method triggered when form is submitted
  submit() {
    console.log(this.profileForm.value);
   
    this.profileService.save(this.profileForm.value).subscribe(data=>{
      console.log(data)
       this.router.navigate(['profiles'])
    },error=>{
      console.warn(error)
      this.errorMsg = `Error: ${error.error.message}`;
    })
  }

  handleFileInput(e:any){
    const reader = new FileReader();
    if(e.target.files && e.target.files.length) {
      const [file] = e.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.defaultProfile = reader.result as string;
        this.profileForm.patchValue({
          avatar:e.target.files[0]
        })
      };
    }
  }
}
