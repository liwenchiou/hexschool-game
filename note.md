# FLEX

## 1. 外容器增加 display:flex 屬性

```css!=
.containe>ul{
  display: flex;
  flex-wrap:wrap
}
```

## 2. 決定主軸方向

### 1. flex-direction:row;

主軸由左向右

### 2. flex-direction:row-reverse;

主軸由右向左

### 3. flex-direction: column;

主軸由上到下

### 4. flex-direction: column-reverse;

主軸由下到上

## 3. 決定是否換行

### 1. flex-wrap:nowrap;

不換行(預設，會根據父容器寬度自動調整)

### 2. flex-wrap:wrap

根據父容器寬度換行

### 3. flex-wrap:wrap-reverse;

根據父容器寬度換行，順序顛倒

## 4. 決定主軸方向對齊方式

### 1. **主軸靠起點（預設）(**justify-content: flex-start;**)**

```css!=
.f1>ul{
  display: flex;
}
```
![image](https://hackmd.io/_uploads/ry-Kty2zlg.png)


### 2. **主軸置中 (**justify-content: center;**)**


```css!=
.f2>ul{
  display: flex;
  justify-content: center;
}
```
![image 1](https://hackmd.io/_uploads/rkestJ2Mxl.png)


### 3. 主軸靠結束點(justify-content: flex-end;)

```css!=
.f4>ul{
  display: flex;
  justify-content: flex-end;
}
```
![image 2](https://hackmd.io/_uploads/HJXnKJhzxe.png)


### 4. 主軸各區塊等距(justify-content: space-around;)

```css!=
.f3>ul{
  display: flex;
  justify-content: space-around;
}
```
![image 3](https://hackmd.io/_uploads/rkbTtknzgx.png)

### 5. 主軸區塊間等距( justify-content: space-between;)

```css!=
.f5>ul{
  display: flex;
  justify-content: space-between;
}
```
![image 4](https://hackmd.io/_uploads/rJ8CFyhfee.png)


### 6. 主軸所有物件等距(justify-content: space-evenly;)

```css!=
.f6>ul{
  display: flex;
  justify-content: space-evenly;
}
```
![image 5](https://hackmd.io/_uploads/rkT0tk3Meg.png)


## 5. 決定交錯軸方向對齊方式(未設定換行 flex-wrap:nowrap)

### 1. 交錯軸靠起點(align-items:flex-start;)

```css!=
.d1{
  align-items:flex-start;
}
```
![image 6](https://hackmd.io/_uploads/B17lckhfeg.png)

### 2. 交錯軸置中(align-items:center;)

```css!=
.d2{
  align-items:center;
}
```
![image 7](https://hackmd.io/_uploads/H1edecJ2zle.png)

### 3. 交錯軸靠結束點(align-items:flex-end;)

```css!=
.d3{
  align-items:flex-end;
}
```
![image 8](https://hackmd.io/_uploads/SkV-9y2Mee.png)

### 4. 交錯軸佔滿區塊(align-items: stretch;)

```css!=
.d4{
  align-items: stretch;
}
```
![flex_交錯軸練習](https://hackmd.io/_uploads/B17fcyhMlx.png)

### 5. 交錯軸根據內容佔滿

```css!=
.d5{
  align-items: baseline;
/*   width: 400px; */
}
```
![flex_交錯軸練習2](https://hackmd.io/_uploads/BkAf51hzxl.png)


## 6. 單個子項目對齊(align-self: flex-end)

![FLEX_的理解_-_白板_-_Canva](https://hackmd.io/_uploads/ByP79Jhfgx.png)
