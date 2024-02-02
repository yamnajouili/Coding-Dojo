<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>
<body>
<div class="container">
<form class="p-4 w-25 m-auto border border-info" action="/processform" method="POST">
<div class="mb-3">
 <label for="exampleFormControlInput1" class="form-label">Pick any number form 5 to 25</label>
  <input type="number" class="form-control" name="number">
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Enter any name of city:</label>
  <input type="text" class="form-control" name="city">
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Enter of any real person:</label>
  <input type="text" class="form-control"name="person" >
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Enter professional endeavor or hobby: </label>
  <input type="text" class="form-control" name="hobby">
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Enter any type of living thing:</label>
  <input type="text" class="form-control" name="living">
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label" >Say something nice to someone: </label>
  <textarea class="form-control"  rows="3" name="somthing"></textarea>
</div>
<button class="btn btn-primary">Send</button>



</form>


</div>
</body>
</html>