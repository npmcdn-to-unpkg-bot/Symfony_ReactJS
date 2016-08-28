<?php

/*
 * This file is part of the Symfony_React projet.
 *
 * (c) Guillaume Loulier <guillaume.loulier@hotmail.fr>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace AppBundle\Services;

use AppBundle\Entity\Article;
use AppBundle\Form\ArticleAddType;
use Doctrine\ORM\EntityManager;
use Symfony\Component\Form\FormFactory;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\Session;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage;

class Blog
{
    /**
     * @var EntityManager
     */
    private $doctrine;

    /**
     * @var FormFactory
     */
    private $form;

    /**
     * @var Session
     */
    private $session;

    /**
     * @var TokenStorage
     */
    private $user;

    /**
     * Blog constructor.
     *
     * @param EntityManager $doctrine
     * @param FormFactory $form
     * @param Session $session
     * @param TokenStorage $user
     */
    public function __construct(EntityManager $doctrine, FormFactory $form, Session $session, TokenStorage $user)
    {
        $this->doctrine = $doctrine;
        $this->form = $form;
        $this->session = $session;
        $this->user = $user;
    }

    /**
     * Allow to get all the articles and transform the data into a Json format.
     */
    public function getArticles()
    {
        $articles = $this->doctrine->getRepository('AppBundle:Article')->findAll();
    }

    /**
     * Allow to create a new Article.
     *
     * @param Request $request
     */
    public function createArticle(Request $request)
    {
        $article = new Article();
        $article->setDateCreated(new \DateTime());
        $article->setAuthor($this->user->getToken()->getUser());

        $form = $this->form->create(ArticleAddType::class, $article);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->doctrine->persist($article);
            $this->doctrine->flush();
        }

        return $form;
    }
}