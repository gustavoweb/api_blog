const express = require('express')
const app = express()
const Posts = require('../models/Posts')

// Cadastrar um Post
exports.cadastrarPost = async (req, res) => {
    try {
      const post = await Posts.create(req.body)
      res.status(201).json(post)
    } catch (error) {
      res.status(500).json({ error: 'Erro ao cadastrar o post' })
    }
  }

  // Listar todas os Posts
  exports.listarPosts = async (req, res) => {
    try {
      const ListaPosts = await Posts.find()
      res.json(ListaPosts)
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar as perguntas' })
    }
  }

  // Atualizar um post pelo ID
exports.atualizarPost = async (req, res) => {
  try {
    const post = await Posts.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
    if (!post) {
      return res.status(404).json({ error: 'Post não encontrada' })
    }
    res.json(post)
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar a post' })
  }
}