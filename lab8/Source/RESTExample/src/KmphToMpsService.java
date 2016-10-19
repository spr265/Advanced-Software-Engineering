import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

@Path("/ktomservice")

public class KmphToMpsService {
	
	@GET
	@Produces("application/xml")
	public String convertKmphToMps(){
		Double kmperhour = 36.0;
		Double meterpersec;
		meterpersec = (kmperhour * 5)/18;
		String result = "@Produces(\"application/xml\") Output: \n\nKmph to Mps Converter Output: \n\n" + meterpersec;
		return "<kmphtompsservice>" + "<kmperhour>" + kmperhour + "</kmperhour>" + "<kmphtompsoutput>" + result + "</kmphtompsoutput>" + "</kmphtompsservice>";
	}
	
	@Path("{k}")
	@GET
	@Produces("application/xml")
	public String convertKmphtoMpsFromInput(@PathParam("k") Double k){
		Double kmperhour = k;
		Double meterpersec;
		meterpersec = (kmperhour * 5)/18;
		String result = "@Produces(\"application/xml\") Output: \n\nKmph to Mps Converter Output: \n\n" + meterpersec;
		return "<kmphtompsservice>" + "<kmperhour>" + kmperhour + "</kmperhour>" + "<kmphtompsoutput>" + result + "</kmphtompsoutput>" + "</kmphtompsservice>";
	}

}
