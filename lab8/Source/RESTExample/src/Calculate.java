public class Calculate {

	public int sum(int var1, int var2) {
		System.out.println("Adding values: " + var1 + " + " + var2);
		return var1 + var2;
	}
	
	public Double mtokConvert(double num1){
		double meterpersec = num1;
		double kmperhour = (meterpersec * 18)/5;
		System.out.println("Converting "+meterpersec+" from meterpersec to kmperhour "); 
		return kmperhour;
	}
	
	public Double ktomConvert(double num1){
		double kmperhour = num1;
		double meterpersec = (kmperhour * 5)/18;
		System.out.println("Converting "+kmperhour+" from kmperhour to meterpersec "); 
		return meterpersec;
	}
}