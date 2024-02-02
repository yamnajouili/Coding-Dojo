<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<%@ page isErrorPage="true"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Expenses</title>

<script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
<div class="pl-24 pr-24 mt-24">

<table class="min-w-full border-collapse block md:table ">
		<thead class="block md:table-header-group">
			<tr class="border border-grey-500 md:border-none block md:table-row absolute -top-full md:top-auto -left-full md:left-auto  md:relative ">
				<th class="bg-pink-900 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Expense</th>
				<th class="bg-pink-900 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Vendor</th>
				<th class="bg-pink-900 p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Amount</th>
			
				<th class="bg-pink-900   p-2 text-white font-bold md:border md:border-grey-500 text-left block md:table-cell">Actions</th>
			</tr>
		</thead>
		<tbody class="block md:table-row-group">
		<c:forEach var="oneexpense" items="${allexpenses}">
			<tr class="bg-gray-300 border border-grey-500 md:border-none block md:table-row">
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell"><a href="expense/${oneexpense.id}">${oneexpense.name}</a></td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">${oneexpense.vendor }</td>
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell">${oneexpense.amout }</td>
				
				<td class="p-2 md:border md:border-grey-500 text-left block md:table-cell ">
				<div class="flex justify-center gap-2">
					
					<a class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded" href="/edit/${oneexpense.id }">Edit</a>
					<form action="/${oneexpense.id}" method="post">
								<input type="hidden" name="_method" value="delete" > <input
									type="submit" value="Delete" class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 border border-red-500 rounded">
							</form>
				</div></td>
			</tr>
			</c:forEach>
			
		</tbody>
	</table></div>
	<div class="mt-32">
	
<!--     ================================ -->

       <form:form action="/processExpense" method="POST" 
 			modelAttribute="expense" class="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md  mb-8"> 
			<form:errors path="*" /> 
			<div> 
				<form:label path="name" class="block text-gray-700 text-sm font-bold mb-2" >Expense:</form:label> 

				<form:input path="name" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" /> 
			</div> 
 			<div> 
 				<form:label path="vendor" class="block text-gray-700 text-sm font-bold mb-2" >Vendor:</form:label> 
 				<form:input path="vendor" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" /> 
			</div>

			<div> 
				<form:label path="amout" class="block text-gray-700 text-sm font-bold mb-2" >Amount:</form:label> 

				<form:input type="number" path="amout" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" step="0.01"/> 
			</div> 
			
			<div> 
				<form:label path="description" class="block text-gray-700 text-sm font-bold mb-2" >Description:</form:label> 

				<form:textarea  path="description" class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" ></form:textarea> 
			</div> 
			<input type="submit" value="Submit" class="w-full bg-pink-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300 mt-5" /> 
		</form:form> 
	</div>
</body>
</html>