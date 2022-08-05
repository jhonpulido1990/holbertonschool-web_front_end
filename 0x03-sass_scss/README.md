# 0x03. Sass & Scss
## Details
 By: Guillaume, CTO at Holberton School Weight: 1Project will startAug 4, 2022 12:00 AM, must end byAug 5, 2022 12:00 AMwas released atAug 4, 2022 12:00 PM An auto review will be launched at the deadline ![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2018/5/9936ba361a3962278900.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220805%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220805T034143Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=aacd337799128ea44087234cdf10a34a652a9f22e945193f72745231ee0a65e5) 

## Resources
Read or watch :
* [Sass Basics](https://intranet.hbtn.io/rltoken/ayoQ7NtS8w7tZvyeqhkzsw) 

* [Sass flow control directives: @if, @for, @each and @while](https://intranet.hbtn.io/rltoken/AJoY0kBondaDK1SNp4B4VA) 

* [Sass references](https://intranet.hbtn.io/rltoken/kf_4QcS6Jj-_cePDrNrAlw) 

## Learning Objectives
At the end of this project, you are expected to be able to  [explain to anyone](https://intranet.hbtn.io/rltoken/IwfUKr71vUBn9cnqp_hVaQ) 
 ,  without the help of Google :
### General
* What Sass means
* How to write Sass & Scss file
* What is the difference between Sass and Scss
* What is the Sass preprocessing
* How to declare a variable
* How to use nested definition
* How to import a Sass file
* How to use mixins
* How to declare extend/inheritance styles
* How to manipulate operators
## Requirements
### General
* Allowed editors:  ` vi ` ,  ` vim ` ,  ` emacs ` 
* All your files will be executed on Ubuntu 18.04 LTS using  ` Sass 3.7.4 `  (or higher)
* All your files should end with a new line
* All your Scss files should have a comment at the beginning (i.e. syntax above)
* All your files should start by a comment describing the task
* A  ` README.md `  file, at the root of the folder of the project, is mandatory
* The length of your files will be tested using  ` wc ` 
## More Info
### Comments for your Scss file:
All your Scss file must start with a comment block
 ` $ cat my_styles.scss
/* My style */
body {
    .container {
        color: #3D3D3D;
    }
}
$
 ` ### Install Sass/Scss on Ubuntu 18.04 LTS
```bash
$ sudo apt-get install -y ruby2.5 ruby2.5-dev
$ sudo apt-get install ubuntu-dev-tools
$ gem install sass -v 3.7.4
$ sass --version
Ruby Sass 3.7.4

```
 ![](https://holbertonintranet.s3.amazonaws.com/uploads/medias/2018/5/ea3f78848fbf9b717e91.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOU5BHMTQX4%2F20220805%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20220805T034143Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=4cd0f26ec05865bd6d551b004c271e46067df2295aeac672f75577843931aa43) 

### Quiz questions
Great!          You've completed the quiz successfully! Keep going!          (Show quiz)#### 
        
        Question #0
    
 Quiz question Body What Sass means?
 Quiz question Answers * Super Awesome StyleSheets

* Syntactically Augmented StyleSheets

* Syntactically Awesome StyleSheets

* Simply Awesome StyleSheets

 Quiz question Tips #### 
        
        Question #1
    
 Quiz question Body Who designed Sass?
 Quiz question Answers * Natalie Weizenbaum

* Hampton Catlin

* Guido van Rossum

 Quiz question Tips #### 
        
        Question #2
    
 Quiz question Body How to declare variable?
 Quiz question Answers *  ` var my_var ` 

*  ` $my_var ` 

*  ` let my_var ` 

*  ` int my_var ` 

*  ` const my_var ` 

 Quiz question Tips #### 
        
        Question #3
    
 Quiz question Body How to import a file?
 Quiz question Answers *  ` @import 'my_file'; ` 

*  ` @import 'my_file.scss'; ` 

*  ` #import 'my_file'; ` 

*  ` from my_file import * ` 

 Quiz question Tips #### 
        
        Question #4
    
 Quiz question Body How to create a “for each” loop?
 Quiz question Answers *  ` @for $my_item in $my_list ` 

*  ` @foreach $my_item in $my_list ` 

*  ` @for $my_item each in $my_list ` 

*  ` @each $my_item in $my_list ` 

 Quiz question Tips #### 
        
        Question #5
    
 Quiz question Body How to create a “while” loop?
 Quiz question Answers *  ` @while $i is under 10 ` 

*  ` @while $i < 10 ` 

*  ` @while $i < 10 then ` 

*  ` @for $i < 10 ` 

 Quiz question Tips #### 
        
        Question #6
    
 Quiz question Body Does Sass allow function creation?
 Quiz question Answers * Yes

* No

 Quiz question Tips ## Tasks
### 0. Always debugging!
          mandatory         Progress vs Score  Task Body Write a Sass file that prints   ` Hello world `   in the debug output.
```bash
guillaume@ubuntu:~/$ sass 0-debug_log.scss | head -n 0
0-debug_log.scss:2 DEBUG: Hello world
guillaume@ubuntu:~/$ 

```
 Task URLs  Github information Repo:
* GitHub repository:  ` holbertonschool-web_front_end ` 
* Directory:  ` 0x03-sass_scss ` 
* File:  ` 0-debug_log.scss ` 
 Self-paced manual review  Panel footer - Controls 
### 1. Color variable
          mandatory         Progress vs Score  Task Body Write a Sass file that assigns the text color   ` #3D3D3D `   to the HTML tags   ` body `   and   ` p `  .
* You must use a Sass variable
```bash
guillaume@ubuntu:~/$ sass 1-color_variable.scss | tail -n +2
body {
  color: #3D3D3D; }

p {
  color: #3D3D3D; }
guillaume@ubuntu:~/$ 

```
 Task URLs  Github information Repo:
* GitHub repository:  ` holbertonschool-web_front_end ` 
* Directory:  ` 0x03-sass_scss ` 
* File:  ` 1-color_variable.scss ` 
 Self-paced manual review  Panel footer - Controls 
### 2. Colors
          mandatory         Progress vs Score  Task Body Write a Sass file that assigns:
* The text color  ` #3D3D3D `  to the HTML tags  ` body `  and  ` p ` 
* The background color  ` #6D6D6D `  to the HTML tags  ` body `  and  ` h2 ` 
* You must use 2 Sass variables
```bash
guillaume@ubuntu:~/$ sass 2-color_variables.scss | tail -n +2
body {
  color: #3D3D3D;
  background-color: #6D6D6D; }

p {
  color: #3D3D3D; }

h2 {
  background-color: #6D6D6D; }
guillaume@ubuntu:~/$ 

```
 Task URLs  Github information Repo:
* GitHub repository:  ` holbertonschool-web_front_end ` 
* Directory:  ` 0x03-sass_scss ` 
* File:  ` 2-color_variables.scss ` 
 Self-paced manual review  Panel footer - Controls 
### 3. Nested tag
          mandatory         Progress vs Score  Task Body Write a Sass file that assigns:
* No margin or padding in  ` body `  tags
* Margin  ` 10px `  to all of the  ` p `  tags inside  ` body `  tags
* You must use nested declarations
```bash
guillaume@ubuntu:~/$ sass 3-nested_tag.scss | tail -n +2
body {
  margin: 0px;
  padding: 0px; }
  body p {
    margin: 10px; }
guillaume@ubuntu:~/$ 

```
 Task URLs  Github information Repo:
* GitHub repository:  ` holbertonschool-web_front_end ` 
* Directory:  ` 0x03-sass_scss ` 
* File:  ` 3-nested_tag.scss ` 
 Self-paced manual review  Panel footer - Controls 
### 4. Nested class
          mandatory         Progress vs Score  Task Body Write a Sass file that assigns:
* Text color  ` #3D3D3D `  to elements inside  ` body `  tags
* Text color  ` #FF0000 `  to any elements of class  ` .red `  inside  ` body `  tags
* You must use nested declarations
```bash
guillaume@ubuntu:~/$ sass 4-nested_class.scss | tail -n +2
body {
  color: #3D3D3D; }
  body .red {
    color: #FF0000; }
guillaume@ubuntu:~/$ 

```
 Task URLs  Github information Repo:
* GitHub repository:  ` holbertonschool-web_front_end ` 
* Directory:  ` 0x03-sass_scss ` 
* File:  ` 4-nested_class.scss ` 
 Self-paced manual review  Panel footer - Controls 
### 5. Nested child
          mandatory         Progress vs Score  Task Body Write a Sass file that assigns:
* Text color  ` #3D3D3D `  to elements inside  ` body `  tags
* Text color  ` #FF0000 `  to any elements of class  ` .red `  that are the first children of the  ` body ` 
* You must use nested declarations
```bash
guillaume@ubuntu:~/$ sass 5-nested_child.scss | tail -n +2
body {
  color: #3D3D3D; }
  body > .red {
    color: #FF0000; }
guillaume@ubuntu:~/$ 

```
 Task URLs  Github information Repo:
* GitHub repository:  ` holbertonschool-web_front_end ` 
* Directory:  ` 0x03-sass_scss ` 
* File:  ` 5-nested_child.scss ` 
 Self-paced manual review  Panel footer - Controls 
### 6. Nested hover
          mandatory         Progress vs Score  Task Body Write a Sass file that assigns:
* Text color  ` #FF0000 `  to  ` button `  tags
* When the user hovers over  ` button `  tags, text color should change to  ` #00FF00 ` 
* You must use nested declarations
```bash
guillaume@ubuntu:~/$ sass 6-nested_hover.scss | tail -n +2
button {
  color: #FF0000; }
  button:hover {
    color: #00FF00; }
guillaume@ubuntu:~/$ 

```
 Task URLs  Github information Repo:
* GitHub repository:  ` holbertonschool-web_front_end ` 
* Directory:  ` 0x03-sass_scss ` 
* File:  ` 6-nested_hover.scss ` 
 Self-paced manual review  Panel footer - Controls 
### 7. Nested and nested again
          mandatory         Progress vs Score  Task Body Write a Sass file that assigns:
* Font size  ` 14px `  to all  ` body `  tags
* Font size  ` 16px `  to all  ` h1 `  tags inside  ` body `  tags
* Font size  ` 12px `  to  ` h1 `  tags of class  ` .smaller `   inside   ` body `  tags
* You must use nested declarations
```bash
guillaume@ubuntu:~/$ sass 7-nested_deeper.scss | tail -n +2
body {
  font-size: 14px; }
  body h1 {
    font-size: 16px; }
    body h1.smaller {
      font-size: 12px; }
guillaume@ubuntu:~/$ 

```
 Task URLs  Github information Repo:
* GitHub repository:  ` holbertonschool-web_front_end ` 
* Directory:  ` 0x03-sass_scss ` 
* File:  ` 7-nested_deeper.scss ` 
 Self-paced manual review  Panel footer - Controls 
### 8. Margin mixin
          mandatory         Progress vs Score  Task Body Write a Sass file that assigns:
* Margin left and right at  ` 10px `  to  ` body `  tags
* Margin left and right at  ` 15px `  to  ` div `  tags
* You must use a mixin
```bash
guillaume@ubuntu:~/$ sass 8-mixin_margins.scss | tail -n +2
body {
  margin-left: 10px;
  margin-right: 10px; }

div {
  margin-left: 15px;
  margin-right: 15px; }
guillaume@ubuntu:~/$ 

```
 Task URLs  Github information Repo:
* GitHub repository:  ` holbertonschool-web_front_end ` 
* Directory:  ` 0x03-sass_scss ` 
* File:  ` 8-mixin_margins.scss ` 
 Self-paced manual review  Panel footer - Controls 
### 9. Extended
          mandatory         Progress vs Score  Task Body Write a Sass file that assigns:
* Font size  ` 12px `  to all tags of class  ` .info ` 
* Text color  ` #00FF00 `  to all tags of class  ` .success `  and extend style of the class  ` .info ` 
* Text color  ` #FF0000 `  to all tags of class  ` .warning `  and extend style of the class  ` .info ` 
```bash
guillaume@ubuntu:~/$ sass 9-extend_list.scss | tail -n +2
.info, .success, .warning {
  font-size: 12px; }

.success {
  color: #00FF00; }

.warning {
  color: #FF0000; }
guillaume@ubuntu:~/$ 

```
 Task URLs  Github information Repo:
* GitHub repository:  ` holbertonschool-web_front_end ` 
* Directory:  ` 0x03-sass_scss ` 
* File:  ` 9-extend_list.scss ` 
 Self-paced manual review  Panel footer - Controls 
### 10. Import colors
          mandatory         Progress vs Score  Task Body Write a Sass file that assigns:
* Text color  ` $red `  from  ` 10-colors.scss `  to the class  ` .red ` 
* Text color  ` $green `  from  ` 10-colors.scss `  to the class  ` .green ` 
* Text color  ` $blue `  from  ` 10-colors.scss `  to the class  ` .blue ` 
* You must use  ` @import ` 
```bash
guillaume@ubuntu:~/$ cat 10-colors.scss
/* All my colors */
$red: #FF0000;
$green: #00FF00;
$blue: #0000FF;
guillaume@ubuntu:~/$ sass 10-import_colors.scss | tail -n +3
.red {
  color: #FF0000; }

.green {
  color: #00FF00; }

.blue {
  color: #0000FF; }
guillaume@ubuntu:~/$ 

```
 Task URLs  Github information Repo:
* GitHub repository:  ` holbertonschool-web_front_end ` 
* Directory:  ` 0x03-sass_scss ` 
* File:  ` 10-import_colors.scss ` 
 Self-paced manual review  Panel footer - Controls 
### 11. For each
          mandatory         Progress vs Score  Task Body Write a Sass file that creates a class for each name in the list   ` $list-names `   and assigns the background image based on the name (example below):
* You must use  ` @import ` 
* You must use  ` @each `  statement
```bash
guillaume@ubuntu:~/$ cat 11-photos.scss 
/* All names */
$list-names: julien john sam damian;
guillaume@ubuntu:~/$ sass 11-loop_photos.scss | tail -n +3
.photo-julien {
  background: image-url("photos/julien.jpg") no-repeat; }

.photo-john {
  background: image-url("photos/john.jpg") no-repeat; }

.photo-sam {
  background: image-url("photos/sam.jpg") no-repeat; }

.photo-damian {
  background: image-url("photos/damian.jpg") no-repeat; }
guillaume@ubuntu:~/$ 

```
 Task URLs  Github information Repo:
* GitHub repository:  ` holbertonschool-web_front_end ` 
* Directory:  ` 0x03-sass_scss ` 
* File:  ` 11-loop_photos.scss ` 
 Self-paced manual review  Panel footer - Controls 
### 12. Loop Headers
          mandatory         Progress vs Score  Task Body Write a Sass file that creates   ` H* `   tags, where ‘*’ is the size of the font used.
*  ` h1 `  must have font size equal to  ` 1px ` ,  ` h2 `  must have font size equal to  ` 2px ` , etc.
* You must create  ` H* `  tags from 1 to 5
* You must use  ` @for `  statement
```bash
guillaume@ubuntu:~/$ sass 12-loop_header.scss | tail -n +2
h1 {
  font-size: 1px; }

h2 {
  font-size: 2px; }

h3 {
  font-size: 3px; }

h4 {
  font-size: 4px; }

h5 {
  font-size: 5px; }
guillaume@ubuntu:~/$ 

```
 Task URLs  Github information Repo:
* GitHub repository:  ` holbertonschool-web_front_end ` 
* Directory:  ` 0x03-sass_scss ` 
* File:  ` 12-loop_header.scss ` 
 Self-paced manual review  Panel footer - Controls 
[Done with the mandatory tasks? Unlock 4 advanced tasks now!](https://intranet.hbtn.io/projects/363/unlock_optionals) 

×#### Recommended Sandbox
[Running only]() 
### 1 image(0/5 Sandboxes spawned)
### Ubuntu 18.04 - SASS
Ubuntu 18.04 with Sass installed
[Run]() 
