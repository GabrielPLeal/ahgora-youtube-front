import ReactTable from 'react-table-v6'
import 'react-table-v6/react-table.css'
import { Card, CardBody } from 'reactstrap'
import useContentResponse from '../../hooks/useContentResponse'
import HowManyDays from '../howManyDays'
import Spinner from '../loader'
import TopFiveWords from '../topFiveWords'
import WatchModal from '../watchModal'
import './index.css'

const ContentResponse = ({
    loading,
    getValues,
    watch
}) => {

    const {
        formatDate,
        modalIsOpen,
        handleClose,
        currentUrl,
        setCurrentUrl
    } = useContentResponse()

    if (loading) return <Spinner />

    return (
        <div className='pt-4'>
            <WatchModal
                modalIsOpen={modalIsOpen}
                modalToggle={handleClose}
                handleClose={handleClose}
                currentUrl={currentUrl}
                setCurrentUrl={setCurrentUrl}
            />
            <Card className='mb-4'>
                <CardBody>
                    {watch("fiveWordsMostUsed") ? (
                        <div>
                            <TopFiveWords
                                fiveWordsMostUsed={getValues("fiveWordsMostUsed")}
                            />
                            <HowManyDays
                                howManyDaysWatchAllVideos={getValues("howManyDaysWatchAllVideos")}
                            />
                        </div>
                    ) : ("Nenhum dado listado...")
                    }
                </CardBody>
            </Card>
            <div>
                <ReactTable
                    data={watch('videosData')}
                    showPaginationBottom={true}
                    style={{ maxHeight: "30rem", overflow: "auto" }}
                    minRows="1"
                    columns={[
                        {
                            Header: 'Titulo',
                            accessor: 'title',
                            style: { 'whiteSpace': 'unset' },
                            Cell: (props) => <div className="text-center">{props.value}</div>,
                        },
                        {
                            Header: 'Duração',
                            accessor: 'duration',
                            Cell: (props) =>
                                <div className="text-center">
                                    {formatDate(props.value)}
                                </div>,
                        },
                        {
                            Header: 'Video',
                            accessor: 'url',
                            Cell: (props) => {
                                return (
                                    <div className="text-center">
                                        <button
                                            type="button"
                                            class="btn btn-secondary ml-3"
                                            onClick={_ => {
                                                setCurrentUrl(props.value)
                                                handleClose()
                                            }}
                                        >
                                            Assistir
                                        </button>
                                    </div>
                                )
                            },
                        },
                    ]}
                    className="table -striped -highlight Reacttable-nowrap "
                >
                </ReactTable>
            </div>
        </div >
    )
}

export default ContentResponse