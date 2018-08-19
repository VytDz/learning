package kayak_homework;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class test {
	public static void main(String[] args) {
		
		
//		*******Getting input from cmd line and adding it to ArrayList******
		
		List<Integer> A = new ArrayList<Integer>();		
		int num = 0;
		if (args.length > 0) {			
			for (int i = 0; i < args.length; i++) {
			    try {
			       num = Integer.parseInt(args[i]);
			       A.add(num);
			    } catch (NumberFormatException e) {
			        System.err.println("Argument" + args[0] + " must be an integer.");
			        System.exit(1);		        
			    }
			    
			}
		}		

		List<Integer> frequencies = new ArrayList<Integer>();		
		for(int k = 0; k <=9; k++ ) {
			frequencies.add(Collections.frequency(A, k));			
			}
		
		List<Integer> numbers = new ArrayList<Integer>();
		for(int j = 0; j <=9; j++ ) {
		numbers.add(j);
		}
		
		System.out.println("frequency:" + frequencies);
		System.out.print("numbers  :" + numbers);
	}
}

