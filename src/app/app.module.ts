import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { MatButtonModule } from '@angular/material/button';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { OrginizationComponent } from './orginization/orginization.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { UserCreationComponent } from './setup/user-creation/user-creation.component';
import { UserRolesComponent } from './setup/user-roles/user-roles.component';
import { ChangePsdComponent } from './setup/change-psd/change-psd.component';
import { PhotosUplodeComponent } from './setup/photos-uplode/photos-uplode.component';
import { SMSDetailsComponent } from './setup/sms-details/sms-details.component';
import { CampusEventsComponent } from './setup/campus-events/campus-events.component';
import { CertificateUploadComponent } from './setup/certificate-upload/certificate-upload.component';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { DownlodeComponent } from './setup/downlode/downlode.component';
import { LoginDetailsComponent } from './setup/login-details/login-details.component';
import { StuLogDisplayComponent } from './setup/stu-log-display/stu-log-display.component';
import { RolesCreationComponent } from './setup/roles-creation/roles-creation.component';
import { MenuRolesComponent } from './setup/menu-roles/menu-roles.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BranchregComponent } from './setup/branchreg/branchreg.component';
// import { MastersModule } from './masters/masters.module';

// import { ClassesCreationComponent } from './masters/classes-creation/classes-creation.component';
// import { SectionsCreationComponent } from './masters/sections-creation/sections-creation.component';
import { MatNativeDateModule } from '@angular/material/core';
// import { SubjectsCreationComponent } from './masters/subjects-creation/subjects-creation.component';
// import { ExamsCreationComponent } from './masters/exams-creation/exams-creation.component';
// import { AccountHeadsComponent } from './masters/account-heads/account-heads.component';
// import { FeeTypesComponent } from './masters/fee-types/fee-types.component';
// import { InstallmentsComponent } from './masters/installments/installments.component';
// import { FeeStructureComponent } from './masters/fee-structure/fee-structure.component';
// import { EnrollnoMasterComponent } from './masters/enrollno-master/enrollno-master.component';
// import { GradesCreationComponent } from './masters/grades-creation/grades-creation.component';
// import { EmpAllowancesComponent } from './masters/emp-allowances/emp-allowances.component';
// import { SessionsEntryComponent } from './masters/sessions-entry/sessions-entry.component';
// import { EmpDepartmentsComponent } from './masters/emp-departments/emp-departments.component';
// import { BiometricShiftsComponent } from './masters/biometric-shifts/biometric-shifts.component';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
// import { EmpDeductionsComponent } from './masters/emp-deductions/emp-deductions.component';
// import { EmpDesignationComponent } from './masters/emp-designation/emp-designation.component';
// import { EmpPayScaleComponent } from './masters/emp-pay-scale/emp-pay-scale.component';
// import { AcademicYearComponent } from './masters/academic-year/academic-year.component';
import { NgxPaginationModule } from 'ngx-pagination';

// import { AcademicYearComponent } from './masters/academic-year/academic-year.component';

import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
// import { StuApplicationsComponent } from './Academics/stu-applications/stu-applications.component';
// import { StuRegistrationComponent } from './Academics/stu-registration/stu-registration.component';
// import { StudentEditComponent } from './Academics/student-edit/student-edit.component';
// import { StudentProfileComponent } from './Academics/student-profile/student-profile.component';
// import { DaywiseAttendanceComponent } from './Academics/daywise-attendance/daywise-attendance.component';
// import { MonthlyAttendanceComponent } from './Academics/monthly-attendance/monthly-attendance.component';
// import { DeviceAttendanceComponent } from './Academics/device-attendance/device-attendance.component';
// import { MarksEntryComponent } from './Academics/marks-entry/marks-entry.component';
// import { PromotionsComponent } from './Academics/promotions/promotions.component';
// import { SectionChangeComponent } from './Academics/section-change/section-change.component';
// import { StuBulkTransferComponent } from './Academics/stu-bulk-transfer/stu-bulk-transfer.component';
// import { StudentTransferComponent } from './Academics/student-transfer/student-transfer.component';
// import { StudentDeletionComponent } from './Academics/student-deletion/student-deletion.component';
// import { BiometricIdDetailsComponent } from './Academics/biometric-id-details/biometric-id-details.component';
// import { DeletedStudentsComponent } from './Academics/deleted-students/deleted-students.component';
// import { HallticketsgenComponent } from './Academics/hallticketsgen/hallticketsgen.component';
// import { HallticketNoEditComponent } from './Academics/hallticket-no-edit/hallticket-no-edit.component';
// import { InactiveStdListComponent } from './Academics/inactive-std-list/inactive-std-list.component';
// import { TimeTableComponent } from './Academics/time-table/time-table.component';
// import { UpdateRollNoComponent } from './Academics/update-roll-no/update-roll-no.component';
// import { UpdateStuDetailsComponent } from './Academics/update-stu-details/update-stu-details.component';
// import { UpdateStudentIDComponent } from './Academics/update-student-id/update-student-id.component';
// import { UpdateUIDComponent } from './Academics/update-uid/update-uid.component';
// import { RollNowiseMarksComponent } from './Academics/roll-nowise-marks/roll-nowise-marks.component';
// import { SubjectwiseMarksComponent } from './Academics/subjectwise-marks/subjectwise-marks.component';
import { MatTabsModule } from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';


// import { EmployeeAttendanceComponent } from './employee/employee-attendance/employee-attendance.component';
// import { EmployeeLeaveComponent } from './employee/employee-leave/employee-leave.component';
// import { EmployeeSalaryComponent } from './employee/employee-salary/employee-salary.component';
// import { EmployeeSalaryPayComponent } from './employee/employee-salary-pay/employee-salary-pay.component';
// import { EmployeeEventsComponent } from './employee/employee-events/employee-events.component';
// import { EmpRegistrationComponent } from './employee/emp-registration/emp-registration.component';
import { StaffComponent } from './staff/staff.component';
import { StudentsComponent } from './students/students.component';

// import { AdminsetupComponent } from './adminsetup/adminsetup.component';
import { Setup2Component } from './setup2/setup2.component';

import { AddEmpComponent } from './employee/add-emp/add-emp.component';
import { EmplListComponent } from './employee/empl-list/empl-list.component';
import { EmpAttendanceComponent } from './employee/emp-attendance/emp-attendance.component';
import { AddDepartmentComponent } from './employee/add-department/add-department.component';
import { AddDesignationComponent } from './employee/add-designation/add-designation.component';
import { WithdrawalComponent } from './employee/withdrawal/withdrawal.component';
import { AsddComponent } from './all-students/asdd/asdd.component';
import { AttendanceComponent } from './all-students/attendance/attendance.component';
import { StudentsRegComponent } from './all-students/students-reg/students-reg.component';
import { StudentHouseComponent } from './all-students/student-house/student-house.component';
import { AddDocumentComponent } from './all-students/add-document/add-document.component';
import { AddUserComponent } from './employee/add-user/add-user.component';
import { AssignmentComponent } from './all-students/assignment/assignment.component';
import { FeeCollectionComponent } from './all-students/fee-collection/fee-collection.component';
import { LeaveManagementComponent } from './employee/leave-management/leave-management.component';
import { TransportMainComponent } from './transport-main/transport-main.component';
import { LibraryMainComponent } from './library-main/library-main.component';
import { HostelMainComponent } from './hostel-main/hostel-main.component';








@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    DashboardComponent,
    HeaderComponent,
    LoginComponent,
    OrginizationComponent,
    UserCreationComponent,
    UserRolesComponent,
    ChangePsdComponent,
    PhotosUplodeComponent,
    SMSDetailsComponent,
    CampusEventsComponent,
    CertificateUploadComponent,
    DownlodeComponent,
    LoginDetailsComponent,
    StuLogDisplayComponent,
    RolesCreationComponent,
    MenuRolesComponent,
    BranchregComponent,
    StaffComponent,
    StudentsComponent,
    StudentsRegComponent,
    Setup2Component,
    AsddComponent,
    AttendanceComponent,
    AddEmpComponent,
    EmplListComponent,
    EmpAttendanceComponent,
    AddDepartmentComponent,
    AddDesignationComponent,
    WithdrawalComponent,
    StudentHouseComponent,
    AddDocumentComponent,
    AddUserComponent,
    AssignmentComponent,
    FeeCollectionComponent,
    LeaveManagementComponent,
    TransportMainComponent,
    LibraryMainComponent,
    HostelMainComponent,
   



    // AcademicYearComponent,
    // ClassesCreationComponent,
    // SectionsCreationComponent,
    // SubjectsCreationComponent,
    // ExamsCreationComponent,
    // AccountHeadsComponent,
    // FeeTypesComponent,
    // InstallmentsComponent,
    // FeeStructureComponent,
    // EnrollnoMasterComponent,
    // GradesCreationComponent,
    // EmpAllowancesComponent,
    // SessionsEntryComponent,
    // EmpDepartmentsComponent,
    // BiometricShiftsComponent,
    // EmpDeductionsComponent,
    // EmpDesignationComponent,
    // EmpPayScaleComponent,

    // ClassesCreationComponent,
    // SectionsCreationComponent,
    // SubjectsCreationComponent,
    // ExamsCreationComponent,
    // AccountHeadsComponent,
    // FeeTypesComponent,
    // InstallmentsComponent,
    // FeeStructureComponent,
    // EnrollnoMasterComponent,
    // GradesCreationComponent,
    // EmpAllowancesComponent,
    // SessionsEntryComponent,
    // EmpDepartmentsComponent,
    // BiometricShiftsComponent,
    // EmpDeductionsComponent,
    // EmpDesignationComponent,
    // EmpPayScaleComponent,
    // StuApplicationsComponent,
    // StuRegistrationComponent,
    // StudentEditComponent,
    // StudentProfileComponent,
    // DaywiseAttendanceComponent,
    // MonthlyAttendanceComponent,
    // DeviceAttendanceComponent,
    // MarksEntryComponent,
    // PromotionsComponent,
    // SectionChangeComponent,
    // StuBulkTransferComponent,
    // StudentTransferComponent,
    // StudentDeletionComponent,
    // BiometricIdDetailsComponent,
    // DeletedStudentsComponent,
    // HallticketsgenComponent,
    // HallticketNoEditComponent,
    // InactiveStdListComponent,
    // TimeTableComponent,
    // UpdateRollNoComponent,
    // UpdateStuDetailsComponent,
    // UpdateStudentIDComponent,
    // UpdateUIDComponent,
    // RollNowiseMarksComponent,
    // SubjectwiseMarksComponent,

    // EmpRegistrationComponent,
    // EmployeeAttendanceComponent,
    // EmployeeLeaveComponent,
    // EmployeeSalaryComponent,
    // EmployeeSalaryPayComponent,
    // EmployeeEventsComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTableModule,
    MatCardModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatDatepickerModule,
    MatExpansionModule,
    NgxMatFileInputModule,
    AngularFileUploaderModule,
    MatDialogModule,
    MatNativeDateModule,
    NgxMatTimepickerModule,
    NgxPaginationModule,
    MatTabsModule,
    MatSortModule,
    MatPaginatorModule,
    Ng2SearchPipeModule,
    MatTooltipModule



    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
