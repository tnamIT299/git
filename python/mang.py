n = int(input("Nhap vao so phan tu : "))
a = []
for i in range(n) :
  print("Nhap phan tu thu ", i+1)
  ai = int(input())
  a+= [ai]
MAX  = a[0]
vitri = 1
for j in a :
   if j > MAX:
     MAX = j
     vitri+=1
# MIN = a[0]
# for j in a :
#    if j < MIN:
#      MIN = j
print("Gia tri lon nhat cua mang {0} nam o vi tri {1} : " .format(MAX,vitri))  
#print("Gia tri nho nhat cua mang la : " , MIN)          