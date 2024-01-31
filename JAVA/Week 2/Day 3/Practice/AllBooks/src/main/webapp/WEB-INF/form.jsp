<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Create Book</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>
<body>
<div class="container">
<form class="w-50 m-auto shadow p-3 mb-5 bg-body-tertiary rounded" action="/books/processbook" method=POST>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label" >Title:</label>
    <input type="text" class="form-control"  name="title"/>
  
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Languages:</label>
    <input type="text" class="form-control"   name="language"/>
  
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Description:</label>
    <input type="text" class="form-control"  name="description"/>
  
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Pages:</label>
    <input type="number" class="form-control"  name="numberOfPages" />
  
  </div>
  <div >
  <button type="submit" class="btn btn-primary  ">Create</button></div>
</form>

</div>
</body>
</html>