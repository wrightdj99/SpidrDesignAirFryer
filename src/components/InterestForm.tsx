import { useState, type FormEvent } from "react"
import { Card,
         Box, 
         CardContent, 
         Button, 
         Typography,
        TextField } from "@mui/material"
import { MuiTelInput } from "mui-tel-input";
export default function InterestForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [airFryerCost, setAirFryerCost] = useState("");
  const [secretPin, setSecretPin] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const formData = {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      emailAddress: emailAddress,
      airFryerCost: airFryerCost,
      secretPin: secretPin
    };

    const jsonifiedData = JSON.stringify(formData);

    console.log(jsonifiedData);

    e.preventDefault();
  }

  const formatSpidrPin = (value: string) => {
    const digitsOnly = value.replace(/\D/g, "").slice(0, 16);
    const formatted = digitsOnly.replace(/(\d{4})(?=\d)/g, "$1-");
    setSecretPin(formatted);
  };

  function formatCurrency(value: string): string {
    const cleaned = value.replace(/[^\d]/g, ""); // remove non-digits
    const numeric = parseFloat(cleaned) / 100;   // shift for cents
    if (isNaN(numeric)) return "";
    return numeric.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  }
  
  return (
    <Box sx={{ 
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
     }}>
      <Card sx={{
        minWidth: "75vw",
        backgroundColor: "#479dafe6",
      }}>
        <CardContent>
          <Typography variant="h3" gutterBottom sx={{ color: "#ffffff", fontWeight: 200, fontFamily: "inherit" }}>
            Interested In Spidr Design's Air Fryer?
          </Typography>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem"}}>
            <TextField
              sx={{ 
                backgroundColor: "white",
              }}
              variant="filled"
              label="First Name"
              name="firstName"
              id="firstName"
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              sx={{ 
                backgroundColor: "white",
              }}
              variant="filled"
              label="Last Name"
              name="lastName"
              id="lastName"
              onChange={(e) => setLastName(e.target.value)}
            />
            <MuiTelInput
              sx={{ 
                backgroundColor: "white"
              }}
              variant="filled"
              value={phone}
              onChange={setPhone}
              defaultCountry="US"
              label="Phone Number"
              fullWidth
            />
            <TextField
              sx={{ 
                backgroundColor: "white",
              }}
              variant="filled"
              label="Email Address"
              name="emailAddress"
              id="emailAddress"
              onChange={(e) => setEmailAddress(e.target.value)}
            />
            <TextField
              sx={{ 
                backgroundColor: "white",
              }}
              variant="filled"
              value={airFryerCost}
              label="Guess the air fryer's cost"
              name="airFryerCost"
              id="airFryerCost"
              onChange={(e) => setAirFryerCost(formatCurrency(e.target.value))}
              inputProps={{ inputMode: "numeric" }}
            />
            <TextField
              sx={{ 
                backgroundColor: "white",
              }}
              variant="filled"
              value={secretPin}
              label="Super Secret PIN #"
              name="superSecretPin"
              id="superSecretPin"
              onChange={(e) => formatSpidrPin(e.target.value)}
              inputProps={{ inputMode: "numeric" }}
            />
            
            <div style={{ textAlign: "center" }}>
              <Button type="submit" sx={{ 
                backgroundColor: "white",
                width: 400
              }}>Submit</Button>
            </div>
            
          </form>
        </CardContent>
      </Card>
    </Box>
    
  )
}