import {
    Card,
    CardBody,
    CardTitle
} from 'reactstrap';
import InputPattern from '../../components/inputPattern';

import './index.css';

const Search = ({
    register,
    handleSubmit,
    errors,
    submit,
    cleanSearch
}) => {

    return (
        <div className='search-container'>
            <Card style={{ minWidth: "400px" }}>
                <CardBody>
                    <CardTitle>
                        <h4>Informe o tempo que assistirá por dia em minutos</h4>
                    </CardTitle>
                    <div className="week-container">
                        <InputPattern
                            name='mon'
                            label='Segunda'
                            type='number'
                            register={register}
                            className="w-12"
                            placeholder='Segunda'
                            errors={errors}
                        />
                        <InputPattern
                            name='tues'
                            label='Terça'
                            type='number'
                            register={register}
                            className="w-12"
                            placeholder='Terça'
                            errors={errors}
                        />
                        <InputPattern
                            name='wed'
                            label='Quarta'
                            type='number'
                            register={register}
                            className="w-12"
                            placeholder='Quarta'
                            errors={errors}
                        />
                        <InputPattern
                            name='thurs'
                            label='Quinta'
                            type='number'
                            register={register}
                            className="w-12"
                            placeholder='Quinta'
                            errors={errors}
                        />
                        <InputPattern
                            name='fri'
                            label='Sexta'
                            type='number'
                            register={register}
                            className="w-12"
                            placeholder='Sexta'
                            errors={errors}
                        />
                        <InputPattern
                            name='sat'
                            label='Sabado'
                            type='number'
                            register={register}
                            className="w-12"
                            placeholder='Sabado'
                            errors={errors}
                        />
                        <InputPattern
                            name='sun'
                            label='Domingo'
                            type='number'
                            register={register}
                            className="w-12"
                            placeholder='Domingo'
                            errors={errors}
                        />
                    </div>
                    <div className='search-input-container'>
                        <InputPattern
                            name='search'
                            type='text'
                            label='Termo de Pesquisa'
                            className="w-50"
                            register={register}
                            placeholder='Digite sua pesquisa'
                            errors={errors}
                        />
                    </div>
                    <div className='search-button-container'>
                        <button
                            type="button"
                            class="btn btn-danger"
                            onClick={cleanSearch}
                        >
                            Limpar Pesquisa
                        </button>
                        <button
                            type="button"
                            class="btn btn-secondary ml-3"
                            onClick={handleSubmit(submit)}
                        >
                            Pesquisar
                        </button>
                    </div>
                </CardBody>
            </Card>
        </div >
    )
}

export default Search