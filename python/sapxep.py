n = int(input("Nhap so phan tu : "))
a=[]
for i in range(n):
   print("Nhap phan tu thu ",i+1)
   ai = int(input())
   a+=[ai]

a.sort() #HÀM sort() dùng để sắp xếp 
print(a)