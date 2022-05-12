import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { OrginizationComponent } from './orginization/orginization.component';
import { BranchregComponent } from './setup/branchreg/branchreg.component';
import { CampusEventsComponent } from './setup/campus-events/campus-events.component';
import { CertificateUploadComponent } from './setup/certificate-upload/certificate-upload.component';
import { ChangePsdComponent } from './setup/change-psd/change-psd.component';
import { DownlodeComponent } from './setup/downlode/downlode.component';
import { LoginDetailsComponent } from './setup/login-details/login-details.component';
import { MenuRolesComponent } from './setup/menu-roles/menu-roles.component';
import { PhotosUplodeComponent } from './setup/photos-uplode/photos-uplode.component';
import { RolesCreationComponent } from './setup/roles-creation/roles-creation.component';
import { SMSDetailsComponent } from './setup/sms-details/sms-details.component';
import { StuLogDisplayComponent } from './setup/stu-log-display/stu-log-display.component';
import { UserCreationComponent } from './setup/user-creation/user-creation.component';
import { UserRolesComponent } from './setup/user-roles/user-roles.component';

// import { AcademicYearComponent } from './masters/academic-year/academic-year.component';
// import { AccountHeadsComponent } from './masters/account-heads/account-heads.component';
// import { BiometricShiftsComponent } from './masters/biometric-shifts/biometric-shifts.component';
// import { ClassesCreationComponent } from './masters/classes-creation/classes-creation.component';
// import { EmpAllowancesComponent } from './masters/emp-allowances/emp-allowances.component';
// import { EmpDeductionsComponent } from './masters/emp-deductions/emp-deductions.component';
// import { EmpDepartmentsComponent } from './masters/emp-departments/emp-departments.component';
// import { EmpDesignationComponent } from './masters/emp-designation/emp-designation.component';
// import { EmpPayScaleComponent } from './masters/emp-pay-scale/emp-pay-scale.component';
// import { EnrollnoMasterComponent } from './masters/enrollno-master/enrollno-master.component';
// import { ExamsCreationComponent } from './masters/exams-creation/exams-creation.component';
// import { FeeStructureComponent } from './masters/fee-structure/fee-structure.component';
// import { FeeTypesComponent } from './masters/fee-types/fee-types.component';
// import { GradesCreationComponent } from './masters/grades-creation/grades-creation.component';
// import { InstallmentsComponent } from './masters/installments/installments.component';
// import { SectionsCreationComponent } from './masters/sections-creation/sections-creation.component';
// import { SessionsEntryComponent } from './masters/sessions-entry/sessions-entry.component';
// import { SubjectsCreationComponent } from './masters/subjects-creation/subjects-creation.component';


// import { BiometricIdDetailsComponent } from './Academics/biometric-id-details/biometric-id-details.component';
// import { DaywiseAttendanceComponent } from './Academics/daywise-attendance/daywise-attendance.component';
// import { DeletedStudentsComponent } from './Academics/deleted-students/deleted-students.component';
// import { DeviceAttendanceComponent } from './Academics/device-attendance/device-attendance.component';
// import { HallticketNoEditComponent } from './Academics/hallticket-no-edit/hallticket-no-edit.component';
// import { HallticketsgenComponent } from './Academics/hallticketsgen/hallticketsgen.component';
// import { InactiveStdListComponent } from './Academics/inactive-std-list/inactive-std-list.component';
// import { MarksEntryComponent } from './Academics/marks-entry/marks-entry.component';
// import { MonthlyAttendanceComponent } from './Academics/monthly-attendance/monthly-attendance.component';
// import { PromotionsComponent } from './Academics/promotions/promotions.component';
// import { RollNowiseMarksComponent } from './Academics/roll-nowise-marks/roll-nowise-marks.component';
// import { SectionChangeComponent } from './Academics/section-change/section-change.component';
// import { StuApplicationsComponent } from './Academics/stu-applications/stu-applications.component';
// import { StuBulkTransferComponent } from './Academics/stu-bulk-transfer/stu-bulk-transfer.component';
// import { StuRegistrationComponent } from './Academics/stu-registration/stu-registration.component';
// import { StudentDeletionComponent } from './Academics/student-deletion/student-deletion.component';
// import { StudentEditComponent } from './Academics/student-edit/student-edit.component';
// import { StudentProfileComponent } from './Academics/student-profile/student-profile.component';
// import { StudentTransferComponent } from './Academics/student-transfer/student-transfer.component';
// import { SubjectwiseMarksComponent } from './Academics/subjectwise-marks/subjectwise-marks.component';
// import { TimeTableComponent } from './Academics/time-table/time-table.component';
// import { UpdateRollNoComponent } from './Academics/update-roll-no/update-roll-no.component';
// import { UpdateStuDetailsComponent } from './Academics/update-stu-details/update-stu-details.component';
// import { UpdateStudentIDComponent } from './Academics/update-student-id/update-student-id.component';
// import { UpdateUIDComponent } from './Academics/update-uid/update-uid.component';


// import { EmpRegistrationComponent } from './employee/emp-registration/emp-registration.component';
// import { EmployeeAttendanceComponent } from './employee/employee-attendance/employee-attendance.component';
// import { EmployeeEventsComponent } from './employee/employee-events/employee-events.component';
// import { EmployeeLeaveComponent } from './employee/employee-leave/employee-leave.component';
// import { EmployeeSalaryPayComponent } from './employee/employee-salary-pay/employee-salary-pay.component';
// import { EmployeeSalaryComponent } from './employee/employee-salary/employee-salary.component';
import { LoginComponent } from './login/login.component';
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


const routes: Routes = [
  { path: '', component: LoginComponent },
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path:'login', component: LoginComponent},
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  {path:'org', component: OrginizationComponent},
  {path:'branch', component: BranchregComponent},
  {path:'usercreation', component: UserCreationComponent},
  {path:'userroles', component: UserRolesComponent},
  {path:'changpsd', component:ChangePsdComponent},
  {path:'uplode', component: PhotosUplodeComponent},
  {path:'sms', component:SMSDetailsComponent},
  {path:'campus', component: CampusEventsComponent},
  {path:'certificate', component: CertificateUploadComponent},
  {path:'downlode', component: DownlodeComponent},
  {path:'logdetails',component: LoginDetailsComponent},
  {path:'stulog', component: StuLogDisplayComponent},
  {path:'rolescreat', component: RolesCreationComponent},
  {path:'menu', component: MenuRolesComponent},
  {path:'staff', component: StaffComponent},
  {path:'studentdash', component:StudentsComponent},
  {path:'studentReg', component: StudentsRegComponent },
  // {path:'adminsetup', component: AdminsetupComponent},
  {path:'setup2', component: Setup2Component},
  {path:'asd',component: AsddComponent },
  {path:'Atten',component: AttendanceComponent },
  {path:'addemp', component: AddEmpComponent},
  {path:'emplist',component: EmplListComponent},
  {path:'empatten',component: EmpAttendanceComponent},
  {path:'addDep', component: AddDepartmentComponent},
  {path:'adddesig',component: AddDesignationComponent},
  {path:'with', component: WithdrawalComponent},
  {path:'stdhouse', component: StudentHouseComponent},
  {path:'doctype', component: AddDocumentComponent},
  {path:'adduser', component: AddUserComponent},
  {path:'assing', component: AssignmentComponent},
  {path:'feecol', component: FeeCollectionComponent},
  {path:'leave', component: LeaveManagementComponent},
  {path:'trans', component: TransportMainComponent},
  {path:'lib', component: LibraryMainComponent},
  {path:'hostel', component: HostelMainComponent},




  
  // {path:'academic-year', component:AcademicYearComponent},
  // {path:'classes-creation', component:ClassesCreationComponent},
  // {path:'sections-creation', component:SectionsCreationComponent},
  // {path:'subjects-creation', component:SubjectsCreationComponent},
  // {path:'exams-creation', component:ExamsCreationComponent},
  // {path:'account-heads', component:AccountHeadsComponent},
  // {path:'fee-types', component:FeeTypesComponent},
  // {path:'installments', component:InstallmentsComponent},
  // {path:'fee-structure', component:FeeStructureComponent},
  // {path:'enrollno-master', component:EnrollnoMasterComponent},
  // {path:'grades-creation', component:GradesCreationComponent},
  // {path:'emp-allowances', component:EmpAllowancesComponent},
  // {path:'sessions-entry', component:SessionsEntryComponent},
  // {path:'emp-departments', component:EmpDepartmentsComponent},
  // {path:'biometric-shifts', component:BiometricShiftsComponent},
  // {path:'emp-deductions', component:EmpDeductionsComponent},
  // {path:'emp-designation', component:EmpDesignationComponent},
  // {path:'emp-pay-scale', component:EmpPayScaleComponent},
  // {path:'user-creation', component:UserCreationComponent},

  // { path: 'empregistration', component: EmpRegistrationComponent },
  // { path: 'employeeattendance', component: EmployeeAttendanceComponent },
  // { path: 'employeesalary', component: EmployeeSalaryComponent },
  // { path: 'employeeleave', component: EmployeeLeaveComponent },
  // { path: 'employeesalarypay', component: EmployeeSalaryPayComponent },
  // { path: 'employeeevents', component: EmployeeEventsComponent },



  // { path: 'StuApplications', component: StuApplicationsComponent },
  // { path: 'StuRegistration', component: StuRegistrationComponent },
  // { path: 'StudentEdit', component: StudentEditComponent },
  // { path: 'StudentProfile', component: StudentProfileComponent },
  // { path: 'DaywiseAttendance', component: DaywiseAttendanceComponent },
  // { path: 'MonthlyAttendance', component: MonthlyAttendanceComponent },
  // { path: 'DeviceAttendance', component: DeviceAttendanceComponent },
  // { path: 'UserCreation', component: UserCreationComponent },
  // {
  //   path: 'MarksEntry',
  //   component: MarksEntryComponent,
  //   children: [
  //     { path: 'RollwiseMarks', component: RollNowiseMarksComponent },
  //     { path: 'SubjectwiseMarks', component: SubjectwiseMarksComponent },
  //   ],
  // },
  // { path: 'Promotions', component: PromotionsComponent },
  // { path: 'SectionChange', component: SectionChangeComponent },
  // { path: 'StuBulkTransfer', component: StuBulkTransferComponent },
  // { path: 'StudentTransfer', component: StudentTransferComponent },
  // { path: 'StudentDeletion', component: StudentDeletionComponent },
  // { path: 'BiometricIdDetails', component: BiometricIdDetailsComponent },
  // { path: 'DeletedStudents', component: DeletedStudentsComponent },
  // { path: 'HallticketsGen', component: HallticketsgenComponent },

  // { path: 'HallticketNoEdit', component: HallticketNoEditComponent },
  // { path: 'InactiveStdList', component: InactiveStdListComponent },
  // { path: 'TimeTable', component: TimeTableComponent },
  // { path: 'UpdateRollNo', component: UpdateRollNoComponent },
  // { path: 'UpdateStuDetails', component: UpdateStuDetailsComponent },
  // { path: 'UpdateStudentID', component: UpdateStudentIDComponent },
  // { path: 'UpdateUID', component: UpdateUIDComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
