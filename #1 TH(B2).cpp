#include<stdio.h>
int kiemtraSNT(int x){
	if(x<=1) return 0;
	for(int i=2;i<=x-1;i++){
		if(x%i==0) return 0;
	}	
	 return 1;
}
int main(){
	int n,a[100];
	//nhap khoang cua mang
	printf("Nhap vao n>0 =  ");
	scanf("%d",&n);
	
	//nhap so lieu cho mang
	for(int i=0;i<n;i++){
		printf("a[%d]=  ",i);
		scanf("%d",&a[i]);
	}
}
