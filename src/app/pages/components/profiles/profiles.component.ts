import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Profile } from 'src/app/models/profile';
import { ProfileService } from 'src/app/services/profile.service';
import { catchError } from 'rxjs/operators';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProfileModalComponent } from '../profile-modal/profile-modal.component';

@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {
  public profiles$: Observable<Profile[]>;
  public errorMsg: string = '';
  filteredString: string = '';
  public search:any;
  constructor(
    private profile:ProfileService,
    private modalService: NgbModal) {
    this.profiles$ = this.profile.list().pipe(
      catchError(error => {
          if (error.error instanceof ErrorEvent) {
              console.warn(error);
              this.errorMsg = `Error: ${error.error.message}`;
          } else {
            console.warn(error);
              this.errorMsg = `Error: ${error.error.message}`;
          }
          return of([]);
      })
    );
   }

  ngOnInit(): void {
    
  }

  detailView(profile:Profile){
    const modalRef = this.modalService.open(ProfileModalComponent);
    modalRef.componentInstance.profile = profile;
  }

  filtervalue(){

  }

  
}
