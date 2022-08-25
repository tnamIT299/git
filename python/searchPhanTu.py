n = int(input("Nhập số lượng phần tử của dãy số, N = : "))
a = []
for i in range(n):
 print("Nhập phần tử thứ", i+1)
 ai = int(input())
 a += [ai]
k = int(input("Nhập số k cần tìm : "))
if k in a:
 cs = a.index(k)
 print(" Chỉ số tìm được là:", cs+1) #đưa ra vị trí phần tử cần tìm 
else:
 print("Không tìm thấy")

