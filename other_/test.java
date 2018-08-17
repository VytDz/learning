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
		
//		*******Calculating frequency of integers********
		
		
		int x = Collections.frequency(A, 0);
		int a = Collections.frequency(A, 1);
		int b = Collections.frequency(A, 2);
		int c = Collections.frequency(A, 3);
		int d = Collections.frequency(A, 4);
		int e = Collections.frequency(A, 5);
		int f = Collections.frequency(A, 6);
		int g = Collections.frequency(A, 7);
		int h = Collections.frequency(A, 8);
		int i = Collections.frequency(A, 9);
		
		List<Integer> B = new ArrayList<Integer>();
		B.add(x);
		B.add(a);
		B.add(b);
		B.add(c);
		B.add(d);
		B.add(e);
		B.add(f);
		B.add(g);
		B.add(h);
		B.add(i);
//		*******  End Calculating frequency of integers********
		
		
//		*******Adding numbers to print out**************
		List<Integer> numbers = new ArrayList<Integer>();
		numbers.add(0);
		numbers.add(1);
		numbers.add(2);
		numbers.add(3);
		numbers.add(4);
		numbers.add(5);
		numbers.add(6);
		numbers.add(7);
		numbers.add(8);
		numbers.add(9);
//		*******End numbers to print out*****************
		
		System.out.println("frequency:" + B);
		System.out.print("numbers  :" + numbers);
	}
}

