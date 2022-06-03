# This file is used to calculate Christoffel symbols and the derivatives of matric tensor

def christoffelValue(t,m,n,a):
    # Here t=taw, m=mew, n=new and a=alpha

    return t+m+n+a

print(christoffelValue(1,2,3,4)) 
