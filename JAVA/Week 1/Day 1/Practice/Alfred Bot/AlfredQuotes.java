import java.util.Date;
public class AlfredQuotes {
    
    public String basicGreeting() {
        // You do not need to code here, this is an example method
        return "Hello, lovely to see you. How are you?";
    }
    
    public String guestGreeting(String name) {
        // YOUR CODE HERE
        return String.format("Hello, %s. Lovely to see you.",name) ;
    }
    
    public String dateAnnouncement() {
        Date myDate = new Date();
        // YOUR CODE HERE
        return String.format("it is currently %s",myDate);
    }
    
    public String respondBeforeAlexis(String conversation) {
        
        if(conversation.indexOf("Alexis") > -1) {
            return "She's really of no help. What can I get for you?";
        }
        
        else if(conversation.indexOf("Alfred") > -1) {
            return "At your service, naturally. How may I be of assistance?";
        }
        else{
           return "Right And with that I shall retire.";
        } 
    }
    
	// NINJA BONUS
	// See the specs to overload the guestGreeting method
        // SENSEI BONUS
        // Write your own AlfredQuote method using any of the String methods you have learned!
}

