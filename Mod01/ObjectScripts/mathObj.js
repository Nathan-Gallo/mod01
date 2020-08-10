"use strict"

let mathObject1 = { operand1 : 5,
                    operand2 : 10,
                    answer : 0,
                    operation : "Add" };

let mathObject2 = { operand1 : 13,
                    operand2 : 1,
                    answer : 0,
                    operation : "Subtract" };


function doMath(obj)
{
   if (obj.operation == "Add")
   {
        obj.answer = obj.operand1 + obj.operand2;
   }
   else if (obj.operation == "Subtract")
   {
        obj.answer = obj.operand1 - obj.operand2;
   }

   return obj;
}

let result = doMath(mathObject1)
console.log (result.operand1 + " " + result.operation + " " + result.operand2 + " = " + result.answer );

result = doMath(mathObject2)
console.log (result.operand1 + " " + result.operation + " " + result.operand2 + " = " + result.answer );
