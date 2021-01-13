//hdu-1042 N!
/*
Given an integer N(0 ¡Ü N ¡Ü 10000), your task is to calculate N!
Input
One N in one line, process to the end of file.
Output
For each N, output N! in one line.
Sample Input
1
2
3
Sample Output
1
2
6
*/
#include<bits/stdc++.h>
using namespace std;
int n;
int arr[50000];
int main(){
	while(~scanf("%d",&n)){
		if(n<0&&n>10000) break;
		int pre,sum=0; 
		int next=1;
		arr[0]=1;
		for(int i=1;i<=n;i++){
			for(int j=0;j<next;j++){
				pre=arr[j]*i+sum;
				arr[j]=pre%10;
				sum=pre/10;
			}
			while(sum){
				arr[next++]=sum%10;
				sum/=10;
			}
		}
		for(int k=next;k>=1;k--){
			cout<<arr[k-1];
		}
		printf("\n");
	}
	return 0;
}


 
