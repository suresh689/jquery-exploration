<%@ page import="java.io.*,java.sql.*"%>
<% 
String an=request.getParameter("t1");
String ap=request.getParameter("p1");
out.println("values are succes");
 if(an.equals("suresh@gmail.com") && ap.equals("suresh"))
  {
  %>
 <jsp:forward page="search.jsp"/>
 <%
  }
 else
 {
%>
<jsp:forward page="admnlogin.html"/>
<%
}
%>
