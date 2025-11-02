use std::io;

fn main() {
    println!("Enter something: ");
    let mut input = String::new();
    io::stdin().read_line(&mut input).unwrap();
    println!("You entered {}", input);
}
