import React from 'react'

export default props => {

    const rows = Array.isArray(props.produtos) ? props.produtos.map(produto => {
        return (
            <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.description}</td>
                <td>{produto.precoVenda}</td>
                <td>{produto.precoCompra}</td>
                <td>{produto.quantidadeEstoque}</td>
                <td>{produto.fornecedores.name}</td>
                <td>
                    <button type="button" title="Editar"
                            className="btn btn-primary"
                            onClick={e => props.edit(produto.id)}>
                            <i className="pi pi-pencil"></i>Editar
                    </button>
                    <button type="button" title="Excluir"
                            className="btn btn-danger" 
                            onClick={e => props.delete(produto.id)}>
                            <i className="pi pi-trash"></i>Excluir
                    </button>
                </td>
            </tr>
        )
    }) : null;

    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Nome</th>
                    <th scope="col">Descrição</th>
                    <th scope="col">Preço de compra</th>
                    <th scope="col">Preço de venda</th>
                    <th scope="col">Quantidade em estoque</th>
                    <th scope="col">Fornecedores</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    )
}