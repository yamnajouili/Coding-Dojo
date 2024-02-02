<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
      <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
<div class="border border-pink-400 text-center mt-5 mb-5 p-20 m-32">
<h1>Expense Details</h1>
<p>Expense Name:  ${travel.name}</p>
<p>Expense Description:  ${travel.description}</p>
<p>Vendor:  ${travel.vendor}</p>
<p>Amount Spent:  ${travel.amout}</p>

<a href="/expenses">Go Back</a>


</div>
</html>