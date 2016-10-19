import static org.junit.Assert.*;

import org.junit.Test;

public class ConvertSpeedTest {
	
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
	
	double result = ktomConvert(36.0);
	double testresult = 10.0;

	@Test
	public void test() {
		System.out.println("@Test Result() : "+result+" = "+testresult);
		assertEquals(result,testresult,0);
	}

	double result2 = ktomConvert(0);
	double testresult2 = 0;

	@Test
	public void test2() {
		System.out.println("@Test Result() : "+result2+" = "+testresult2);
		assertEquals(result2,testresult2,0);
	}
	
	double result3 =  ktomConvert(70.9);
	double testresult3 = 19.694444444444443;

	@Test
	public void test3() {
		System.out.println("@Test Result() : "+result3+" = "+testresult3);
		assertEquals(result3,testresult3,0);
	}
	
	double result1= mtokConvert(10.0);
	double testresult1=36.0;
	@Test
	public void test1(){
		System.out.println("@Test Result(): "+result1+" = "+testresult1);
		assertEquals(result1,testresult1,0);
	
	}
	
	double result4= mtokConvert(0);
	double testresult4=0;
	@Test
	public void test4(){
		System.out.println("@Test Result(): "+result4+" = "+testresult4);
		assertEquals(result4,testresult4,0);
	
	}
	
	double result5= mtokConvert(160.0);
	double testresult5=576.0;
	@Test
	public void test5(){
		System.out.println("@Test Result(): "+result5+" = "+testresult5);
		assertEquals(result5,testresult5,0);
	
	}
	
	
}
