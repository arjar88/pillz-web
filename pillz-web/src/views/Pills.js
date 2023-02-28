import DataTable from "../components/MedicineDataTable/DataTable";
import Grid from "@mui/material/Grid";

function pills() {
  return (
    <Grid
      container
      justifyContent="flex-end"
      alignItems="center"
      direction="column"
      sx={{ height: "100%" }}
    >
      <Grid item xs={10}>
        <DataTable></DataTable>
      </Grid>
    </Grid>
  );
}

export default pills;
