#include <stdio.h>
#include <math.h>
#include <stdbool.h>

int demSo(int x) {
	int count = 0;
	while(x != 0) {
		count++;
		x = x / 10;
	}
	return count;
}

int tongCacChuSo(int x) {
	int sum = 0;
	while(x != 0) {
		sum += x % 10;
		x = x / 10;
	}
	return sum;
}

int max(int x) {
	int sum = 0;
	int temp = x;
	while(temp != 0) {
		temp--;
		sum += 9 * pow(10, temp); 
	}
	return sum;
}

int result(int n, int k) {
	if(tongCacChuSo(max(n)) < k) {
		return -1;	
	};
	int i = pow(10, n - 1);
	while(true) {
		i++;
		if(tongCacChuSo(i) == k) return i;
	}
}

int main() {
	int t;
	int n[9];
	int k[9];
	do {
		scanf("%d", &t);
	} while(t < 1 || t > 10);
	int i;
	for(i = 0; i < t; i++) {
		do {
			scanf("%d%d", &n[i], &k[i]);
		} while((n[i] < 1 || n[i] > 8) && (k[i] < 1 || k[i] > 200));
	};
	for(i = 0; i < t; i++) {
		printf("%d\n", result(n[i], k[i]));
	}
	return 0;
}
