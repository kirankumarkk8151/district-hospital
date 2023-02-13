import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Child } from 'src/app/model/child';
@Component({
  selector: 'app-addchild',
  templateUrl: './addchild.component.html',
  styleUrls: ['./addchild.component.css']
})
export class AddchildComponent {

  districts = ['Bagalkot', 'Bangalore Rural', 'Bangalore Urban', 'Belgaum', 'Bellary', 'Bidar', 'Bijapur', 'Chamarajanagar', 'Chikkaballapura', 'Chikkamagaluru', 'Chitradurga', 'Dakshina Kannada', 'Davanagere', 'Dharwad', 'Gadag', 'Gulbarga', 'Hassan', 'Haveri', 'Kodagu', 'Kolar', 'Koppal', 'Mandya', 'Mysore', 'Raichur', 'Shimoga', 'Tumkur', 'Udupi', 'Uttara Kannada'];
  
  

    childList:Child[]=[];
    taluksOfDistrict:string[]=[]
   childObj: Child = {
      id:'',
      childName:'',
      age:0,
      gender:'',
      dateOfAdmission:new Date(),
      SHM_NO:'',
      district:'',
      taluk:'',
      address:'',
      anganwadiName:'',
      awAshaName:'',
      motherName:'',
      motherAge:0,
      motherEducation:'',
      motherProfession:'',
      fatherName:'',
      fatherAge:'',
      fatherEducation:'',
      fatherProfession:'',
      noOfFamilyMembers:0,
      averageDailyIncome:0,
      noOfSiblings:0,
    };
    id:string='';
    childName:string='';
    age:number=0;
    gender:string='';
    dateOfAdmission=new Date();
    SHM_NO:string='';
    district:string='';
    taluk:string='';
    address:string='';
    anganwadiName:string='';
    awAshaName:string='';
    motherName:string='';
    motherAge:number=0;
    motherEducation:string=''
    motherProfession:string=''
    fatherName:string=''
    fatherAge:string='';
    fatherEducation:string=''
    fatherProfession:string=''
    noOfFamilyMembers:number=0
    averageDailyIncome:number=0
    noOfSiblings:number=0
    user:any
    constructor(private data:DataService,private route:Router) {   this.user=localStorage.getItem('user')
    if (this.user==null){
      route.navigate([''])
    }

   

  
  }

    addChild() {
      if (this.childName == '' || this.SHM_NO == '' || this.fatherName == '' || this.age == 0 || this.dateOfAdmission==null || this.gender == 'Choose Gender') {
        alert('Fill all input fields');
        return;
      }
    
      this.childObj.id = this.id;
      this.childObj.childName = this.childName;
      this.childObj.age = this.age;
      this.childObj.gender = this.gender;
      this.childObj.dateOfAdmission = this.dateOfAdmission;
      this.childObj.SHM_NO = this.SHM_NO;
      this.childObj.district = this.district;
      this.childObj.taluk = this.taluk;
      this.childObj.address = this.address;
      this.childObj.anganwadiName = this.anganwadiName;
      this.childObj.awAshaName = this.awAshaName;
      this.childObj.motherName = this.motherName;
      this.childObj.motherAge = this.motherAge;
      this.childObj.motherEducation = this.motherEducation;
      this.childObj.motherProfession = this.motherProfession;
      this.childObj.fatherName = this.fatherName;
      this.childObj.fatherAge = this.fatherAge;
      this.childObj.fatherEducation = this.fatherEducation;
      this.childObj.fatherProfession = this.fatherProfession;
      this.childObj.noOfFamilyMembers = this.noOfFamilyMembers;
      this.childObj.averageDailyIncome = this.averageDailyIncome;
      this.childObj.noOfSiblings = this.noOfSiblings;
      
    
    
      this.data.addChild(this.childObj);
      this.resetForm()
      this.route.navigate(['/admin'])
    
    }
    onDistrictChange() {
      if (this.district == 'Bagalkot') {
        this.taluksOfDistrict = ['Badami', 'Bagalkot', 'Bilgi', 'Hungund', 'Jamakhandi', 'Mahalingpur'];
      } else if (this.district == 'Bangalore Rural') {
        this.taluksOfDistrict = ['Bangalore Rural', 'Channapatna', 'Dodballapur', 'Devanahalli', 'Hoskote', 'Nelamangala'];
      } else if (this.district == 'Bangalore Urban') {
        this.taluksOfDistrict = ['Bangalore East', 'Bangalore North', 'Bangalore South', 'Bangalore West'];
      } else if (this.district == 'Belgaum') {
        this.taluksOfDistrict = ['Athani', 'Belgaum', 'Chikodi', 'Gokak', 'Hukkeri', 'Ramdurg', 'Saundatti-Yellamma'];
      } else if (this.district == 'Bellary') {
        this.taluksOfDistrict = ['Bellary', 'Hospet', 'Sandur'];
      } else if (this.district == 'Bidar') {
        this.taluksOfDistrict = ['Aurad', 'Bidar', 'Bhalki', 'Homnabad', 'Basavakalyan'];
      } else if (this.district == 'Bijapur') {
        this.taluksOfDistrict = ['Afzalpur', 'Bijapur', 'Indi', 'Muddebihal', 'Sindgi'];
      } else if (this.district == 'Chamarajanagara') {
        this.taluksOfDistrict = ['Chamarajanagara', 'Channarayapatna', 'Hassan', 'Holenarsipur'];
      } else if (this.district == 'Chikkaballapura') {
        this.taluksOfDistrict = ['Chikkaballapura', 'Gauribidanur', 'Gudibanda'];
      } else if (this.district == 'Chikmagalur') {
        this.taluksOfDistrict = ['Chikmagalur', 'Kadur', 'Tarikere'];
      } else if (this.district == 'Chitradurga') {
        this.taluksOfDistrict = ['Challakere', 'Chitradurga', 'Hiriyur', 'Holalkere'];
      } else if (this.district == 'Dakshina Kannada') {
        this.taluksOfDistrict = ['Bantwal', 'Belthangady', 'Dakshina Kannada', 'Mangalore', 'Puttur', 'Sullia'];
      } else if (this.district == 'Davangere') {
        this.taluksOfDistrict = ['Channagiri', 'Davangere', 'Harapanahalli', 'Harihar'];
      } 
      else if (this.district == 'Dharwad') {
        this.taluksOfDistrict = ['Dharwad', 'Hubli', 'Kalghatgi', 'Kundgol'];
    } else if (this.district == 'Gadag') {
    this.taluksOfDistrict = ['Gadag', 'Ron', 'Mulgund', 'Nargund'];
    } else if (this.district == 'Gulbarga') {
    this.taluksOfDistrict = ['Afzalpur', 'Chincholi', 'Gulbarga', 'Jevargi', ' Jewargi', 'Sedam'];
    } else if (this.district == 'Hassan') {
    this.taluksOfDistrict = ['Alur', 'Arkalgud', 'Arsikere', 'Belur', 'Channarayapatna', 'Hassan', 'Sakaleshapura'];
    } else if (this.district == 'Haveri') {
    this.taluksOfDistrict = ['Byadgi', 'Haveri', 'Hirekerur', 'Ranibennur'];
    } else if (this.district == 'Kodagu') {
    this.taluksOfDistrict = ['Madikeri', 'Virajpet'];
    } else if (this.district == 'Kolar') {
    this.taluksOfDistrict = ['Bangarapet', 'Kolar', 'Malur', 'Mulbagal'];
    } else if (this.district == 'Koppal') {
    this.taluksOfDistrict = ['Gangawati', 'Koppal', 'Yelburga'];
    } else if (this.district == 'Mandya') {
    this.taluksOfDistrict = ['Krishnarajpet', 'Mandya', 'Malavalli', 'Nagamangala'];
    } else if (this.district == 'Mysore') {
    this.taluksOfDistrict = ['Heggadadevanakote', 'Hunsur', 'Mysore', 'Nanjangud', 'Periyapatna', 'T. Narsipur'];
    } else if (this.district == 'Raichur') {
    this.taluksOfDistrict = ['Devadurga', 'Lingsugur', 'Manvi', 'Raichur', 'Sindhnur'];
    } else if (this.district == 'Shimoga') {
    this.taluksOfDistrict = ['Bhadravati', 'Hosanagara', 'Shimoga', 'Sagara', 'Shikaripura'];
    } else if (this.district == 'Tumkur') {
    this.taluksOfDistrict = ['Chiknayakanhalli', 'Gubbi', 'Koratagere', 'Kunigal', 'Pavagada', 'Tumkur'];
    } else if (this.district == 'Udupi') {
    this.taluksOfDistrict = ['Karkala', 'Kundapura', 'Udupi'];
    }
    else if (this.district == 'Uttara Kannada') {
      this.taluksOfDistrict = ['Ankola', 'Honavar', 'Karwar', 'Kumta', 'Mundgod', 'Siddapur', 'Supa'];
      } else if (this.district == 'Yadgir') {
      this.taluksOfDistrict = ['Gurmatkal', 'Shahpur', 'Yadgir'];
      } else {
      this.taluksOfDistrict = [];
      }
      
    }
    resetForm() {
      this.id = '';
      this.childName = '';
      this.age = 0;
      this.gender = '';
      this.dateOfAdmission = new Date();
      this.SHM_NO = '';
      this.district = '';
      this.taluk = '';
      this.address = '';
      this.anganwadiName = '';
      this.awAshaName = '';
      this.motherName = '';
      this.motherAge = 0;
      this.motherEducation = '';
      this.motherProfession = '';
      this.fatherName = '';
      this.fatherAge = '';
      this.fatherEducation = '';
      this.fatherProfession = '';
      this.noOfFamilyMembers = 0;
      this.averageDailyIncome = 0;
      this.noOfSiblings = 0;

    }
    
    updateChild() {
    
    }
}
