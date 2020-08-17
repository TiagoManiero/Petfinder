package com.petfinder.backend.models;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Data
@Table(name="usuario")
public class Usuario{

  @Id
  @GeneratedValue(strategy= GenerationType.AUTO)
  private int codigo;

  private String nome;

  private String email;

  private String senha;

  private String rua;

  private int numero;

  private String cidade;

  private String estado;

  @OneToMany
  private List<Pet> pet;

  public int getCodigo() {
		return codigo;
	}
	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}
    public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
    }
  public String getEmail() {
		return email;
	}
	public void setSenha(String senha) {
		this.senha = senha;
  }
  public String getSenha() {
    return senha;
   }
  public void setEmail(String email) {
    this.email = email;
  }
  public String getRua() {
		return rua;
	}
	public void setRua(String rua) {
		this.rua = rua;
  }
  public int getNumero() {
		return numero;
	}
	public void setNumero(int numero) {
		this.numero = numero;
  }
  public String getCidade() {
		return cidade;
	}
	public void setCidade(String cidade) {
		this.cidade = cidade;
  }
  public String getEstado() {
		return estado;
	}
	public void setEstado(String estado) {
		this.estado = estado;
  }

}