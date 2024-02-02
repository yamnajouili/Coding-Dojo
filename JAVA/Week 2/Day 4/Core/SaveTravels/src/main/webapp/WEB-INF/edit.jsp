<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Edit</title>
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
<div>

 <form:form action="/edit/${expense.id }" method="POST" 
 			modelAttribute="expense" class="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md"> 
			<form:errors path="*" />
			 <input type="hidden" name="_method" value="put"> 
			<p> 
				<form:label path="name" class="block text-gray-700 text-sm font-bold mb-2" >Expense Name:</form:label> 

				<form:input path="name" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" /> 
			</p> 
 			<p> 
 				<form:label path="vendor" class="block text-gray-700 text-sm font-bold mb-2" >Vendor</form:label> 
 				<form:input path="vendor" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" /> 
			</p>

			<p> 
				<form:label path="amout" class="block text-gray-700 text-sm font-bold mb-2" >Amount:</form:label> 

				<form:input type="number" path="amout" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" step="0.01"/> 
			</p> 
			
			<p> 
				<form:label path="description" class="block text-gray-700 text-sm font-bold mb-2" >Description:</form:label> 

				<form:input type="text" path="description" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" /> 
			</p> 
			<input type="submit" value="edit" class="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300 mt-5" /> 
		</form:form> 

</div>

</body>
</html>