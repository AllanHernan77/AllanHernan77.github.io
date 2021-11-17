#include <stdio.h>

int main(){

    int a = 123;
    int sum = 0;
    while (a > 0) {
        int digit = a % 10;
        sum = sum + digit;
        a /= 10;
    }
    printf("%d", sum);

}