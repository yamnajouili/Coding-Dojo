<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
      <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Read Share</title>
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
<div>

<div class="flex justify-between justify-items-center ml-32 mr-32 mt-20">
<h1 class="text-lg">${book.title}</h1>
<a href="/books"  class=" bg-lime-500  text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-pink-700 transition duration-300">Back to the shelves</a>
</div>

<div class="mr-32 ml-32">
<p class="text-lg"><c:choose><c:when test="${book.user.id==user_id}">
<span class="text-red-700">You</span>	
</c:when>
<c:otherwise>
<span class="text-red-700">${book.user.userName}</span> 

</c:otherwise></c:choose>read ${book.title } by ${book.author}  </p>
<p>Here are <c:choose><c:when test="${book.id==user_id}">
<span class="text-red-700">Your</span> thoughts	
</c:when>
<c:otherwise>
<span class="text-red-700">${book.user.userName}</span> 

</c:otherwise></c:choose></p>
<p>${book.mythoughts}</p>


</div>
</div>

<c:if test="${book.user.id==user_id}">
<div class="flex gap-10 ml-40 mr-32 mt-20 items-center">
<div>
<form action="/books/${book.id}" method="post">
								<button type="submit"
                            class="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"
                             name="_method" value="delete">Delete</button>

<a href="/books/edit/${book.id}"  class="bg-cyan-700 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300 mt-5" > Edit</a>
</div></div>
</c:if>

</body>
</html>