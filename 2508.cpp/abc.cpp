#include<iostream>
#include<string>
#include<iomanip>

using namespace std ; 
struct Ngaysinh{
    int ngay , thang , nam ;

};


//enum Gioitinh{nam , nu } ; 


struct NhanVien{
       string hoten ;
       int TNCT;
       Ngaysinh ngaysinh;
       string gt; 
      int  Luong;
};

Struct GiamDoc{
    string vitri;
};

void NhapTT(NhanVien &nv){
        cout << " Nhap ho va ten cua nhan vien :  "  << endl ;
        getline(cin, nv.hoten);
        cout << "Nhap gioi tinh :  " << endl ; 
        cin >> nv.gt;
        cout << "Nhap ngay thang nam sinh  :  "  << nv.ngaysinh.ngay << nv.ngaysinh.thang << nv.ngaysinh.nam<< endl ; 
        cin >> nv.ngaysinh.ngay >> nv.ngaysinh.thang >> nv.ngaysinh.nam;
        cout << "Nhap tham nien cong tac : " << endl;
        cin >>nv.TNCT;
    }

int Luong(NhanVien nv){
    if(nv.TNCT < 12){
        return 1.92 * 650000;
    }else if (nv.TNCT > 12 && nv.TNCT < 36){
        return 2.34 * 650000;
    }else if (nv.TNCT > 36 && nv.TNCT < 60){
        return 3 * 650000;
    }else if (nv.TNCT > 60){
        return 4.5 * 650000;
}
}
int main(){
    NhanVien nv; 
    NhapTT(nv);
    cout << setprecision ; 
    cout << " THONG TIN NHAN VIEN " << nv.hoten << endl;
    cout << "Gioi Tinh : " << nv.gt<< endl;;
    cout << "Ngay sinh  : " << nv.ngaysinh.ngay << " / " << nv.ngaysinh.thang << " / " << nv.ngaysinh.nam<< endl;;
    cout << "Tham nien cong tac  :  " << nv.TNCT<< endl; ;
    cout << " Luong nhan duoc : " << Luong(nv) << "VND" << endl;;

return 0 ;
 
}
