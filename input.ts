/**
 * Typescript Classes with elcharitas
 * Sample Multiline Comment
 *
 * @author Elcharitas
 * @version 1.0.0
 * @license MIT
 */
 import Prompt from "prompt";

 const prompt = async (message: string) => {
   const props = await Prompt.get([message]);
   return props[message];
 };
 /* */
 // this is a single line comment
 (async () => {
   const firstName = await prompt("What is your name?");
   console.log(firstName);
 })();
 
 