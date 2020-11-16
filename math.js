
			function add(){
			var a,b,c;	 
			a=Number(document.getElementById("first").value);
			b=Number(document.getElementById("second").value);
			c= a + b;
			document.getElementById("answer").value= c;
			}
		
        function odd_even(){
        var no;
        no=Number(document.getElementById("no_input").value);
        if(no%2==0)
        {
        alert("Even Number");
        }
        else
        {
        alert("Odd Number");
        }
        }

        function show(){
        var i, no, fact;
        fact=1;
        no=Number(document.getElementById("num").value);
        for(i=1; i<=no; i++)  
        {
        fact= fact*i;
        }  
        document.getElementById("ans").value= fact;
        }
			
			function reverse()
			{
			var a1,no1,b1,temp1=0;

			no1=Number(document.getElementById("reverse").value);

			b1=no1;
			while(no1>0)
			{
			a1=no1%10;
			no1=parseInt(no1/10);
			temp1=temp1*10+a1;
			}
			alert(temp1);
			}
			
		function palin()
		{
		var a,no,b,temp=0;

		no=Number(document.getElementById("no_input").value);

		b=no;
		while(no>0)
		{
		a=no%10;
		no=parseInt(no/10);
		temp=temp*10+a;
		}
		if(temp==b)
		{
		alert("Palindrome number");
		}
		else
		{
		alert("Not Palindrome number");
		}
		}
