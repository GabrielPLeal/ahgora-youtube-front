import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import { Card, CardBody } from 'reactstrap'

const ContentResponse = () => (
    <div className='pt-4'>
        <Card className='mb-4'>
            <CardBody>
                Nenhum dado listado...
            </CardBody>
        </Card>
        <div>
            <ReactTable
                data={[]}
                showPaginationBottom={true}
                style={{ maxHeight: "30rem", overflow: "auto" }}
                minRows="1"
                columns={[
                    {
                        Header: 'Titulo',
                        accessor: 'title',
                        Cell: (props) => <div className="text-center">{props.value}</div>,
                    },
                    {
                        Header: 'Duração',
                        accessor: 'duration',
                        Cell: (props) => <div className="text-center">{props.value}</div>,
                    },
                    {
                        Header: 'Video',
                        accessor: 'url',
                        Cell: (props) => {
                            <div className="text-center">
                                <button>Assistir</button>
                            </div>
                        },
                    },
                ]}
                className="table -striped -highlight Reacttable-nowrap "
            >
            </ReactTable>
        </div>
    </div>
)

export default ContentResponse