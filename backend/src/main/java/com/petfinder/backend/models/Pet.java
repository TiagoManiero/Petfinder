package com.petfinder.backend.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Data;


@Entity
@Data
@Table(name="pet")
public class Pet{

  @Id
  @GeneratedValue(strategy= GenerationType.AUTO)
  private int codigo;

  private String nome;

  private String raça;

  private int idade;

  private String peso;

  private String cidade;

  @ManyToOne
  private Usuario usuario;
  
  public int getCodigo(){
    return codigo;
  }
  public void setCodigo(int codigo){
    this.codigo = codigo;
  }
  public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
    }
    public String getRaça() {
		return raça;
	}
	public void setRaça(String raça) {
		this.raça = raça;
    }
    public int getIdade() {
		return idade;
	}
	public void setIdade(int idade) {
		this.idade = idade;
    }
    public String getPeso() {
		return peso;
	}
	public void setPeso(String peso) {
		this.peso = peso;
    }
  public String getCidade() {
		return cidade;
	}
	public void setCidade(String cidade) {
		this.cidade = cidade;
  }
  public Usuario getUsuario() {
		return usuario;
	}
	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
  }
  
  
  
}