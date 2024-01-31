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

<table class="table mt-5">
  <thead class="table-dark">
    <tr>
     <th>ID</th>
    <th>Title</th>
    <th>Languages</th>
   
    <th>Pages</th>
    
    
    </tr>
  </thead>
  <tbody>
  <c:forEach var="onebook" items="${allBooks}">
    <tr>
     <td>${onebook.id}</td>
    <td><a href="/books/${onebook.id}">${onebook.title }</a></td>
    <td>${onebook.language }</td>
   
    <td>${onebook.numberOfPages}</td>
    </tr>
    </c:forEach>
  </tbody>
</table>
</div>


</body>
</html>