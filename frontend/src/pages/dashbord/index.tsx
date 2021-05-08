import Barchart from "components/barchart";
import DataTable from "components/datatable";
import DonutChart from "components/donutchart";
import Footer from "components/footer";
import Navbar from "components/navbar";


function Dashboard() {
    return (
        <>
            <Navbar />
            <div className='container'>
                <h1 className='text-primary py-3'>Dashbord de Vendas</h1>

                <div className="row px-3">
                    <div className='col-sm-6'>
                        <h5 className='text-center text-secondary'>Taxa de sucesso (%)</h5>
                        <Barchart></Barchart>
                    </div>
                    <div className='col-sm-6'>
                        <h5 className='text-center text-secondary'>Todas as Vendas</h5>
                        <DonutChart></DonutChart>
                    </div>
                </div>

                <div className='py-3'>
                    <h2 className='text-primary'>Todas as vendas</h2>
                </div>

                <DataTable></DataTable>
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;