<%
String userid=request.getParameter("t1"); 
session.putValue("userid",p1); 
String pwd=request.getParameter("p1"); 
Class.forName("com.mysql.jdbc.Driver"); 
java.sql.Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3307/
test","mysql","123456"); 
Statement st= con.createStatement(); 
ResultSet rs=st.executeQuery("select * from user where user_id='"+uname+"'"); 
if(rs.next()) 
{ 
if(rs.getString(2).equals(pwd)) 
{ 
out.println("welcome"+userid); 

} 
else 
{ 
out.println("Invalid password try again"); 
} 
} 
else 
%>