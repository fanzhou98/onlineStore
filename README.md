# mydevstore
####@author Fan
####@email fan.zhou17@student.xjtlu.edu.cn

## 1.Project setup 
#### 1.1 Virtual host setup 
##### 1.back-end 
*   set document root  as ``'mydevstoreAPI' ``
*   set server name as ``mydevstoreAPI.com``
*   set port number as ``8888``
*   source file should be ``index.php``
*   the database config file is ``mydevstoreAPI/api/config.php``

##### 2. front-end 
*   install all require packages. see section 1.2
*   use the command ``npm run serve`` 
*   the back-end configuration in front end is in file ``'mydevstore/vue.config.js'``
you can config by yourself if you use other server name or port number
#### 1.2 to install all the require packages, you need to 
*   first install the 'node' and 'npm'(node package manager) from the link https://nodejs.org/en/download/
````
# check version
node -v
npm -v
````
*   then change disk to the 'mydevstore' and run the command:
```
npm install
```

### 2.Recommend method to load the project:
* Compiles and hot-reloads for development
* Change disk to 'mydevstore'
* Run command
```
npm run serve
```
