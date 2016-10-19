import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;

@Path("/mtokservice")
public class MpsToKmphService {
	
	@GET
	@Produces("application/xml")
	public String convertMpstoKmph(){
		Double kmperhour;
		Double meterpersec = 10.0;
		kmperhour = (meterpersec * 18)/5;
		String result = "@Produces(\"application/xml\") Output: \n\nMps to Kmph Converter Output: \n\n" + kmperhour;
		return "<mpstokmphservice>" + "<meterpersec>" + meterpersec + "</meterpersec>" + "<mpstokmphoutput>" + result + "</mpstokmphoutput>" + "</mpstokmphservice>";
	}
	
	@Path("{m}")
	@GET
	@Produces("application/xml")
	public String convertMpstoKmphFromInput(@PathParam("m") Double m){
		Double kmperhour;
		Double meterpersec = m;
		kmperhour = (meterpersec * 18)/5;
		String result = "@Produces(\"application/xml\") Output: \n\nMps to Kmph Converter Output: \n\n" + kmperhour;
		return "<mpstokmphservice>" + "<meterpersec>" + meterpersec + "</meterpersec>" + "<mpstokmphoutput>" + result + "</mpstokmphoutput>" + "</mpstokmphservice>";
	}

}
