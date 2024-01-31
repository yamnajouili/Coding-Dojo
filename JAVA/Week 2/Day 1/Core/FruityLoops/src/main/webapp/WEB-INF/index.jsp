<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
    
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
</head>
<body>
<div class="container">


<table  class="table mt-5  w-75 m-auto">
<thead class="table-dark"><tr>
<th scope="col">Name</th>
<th scope="col">Price</th>
</tr>
</thead>
<tbody>
   <c:forEach var="onefruit" items="${fruits}">
    <tr>
      
      <td>${onefruit.name }</td>
      <td>${onefruit.price }</td>
     
    </tr>
    </c:forEach>
  </tbody> 
</table></div>
</body>
</html>